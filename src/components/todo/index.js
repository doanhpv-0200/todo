import React from 'react';
import _findIndex from 'lodash/findIndex';
import _map from 'lodash/map';

import {fetchTodoList, createTodo, updateTodo, deleteTodo} from 'src/api';

import List from './list';
import Filter from './filter';
import Create from './create';
import './todos.scss';

class Index extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            todos: [],
            filter: 'SHOW_ALL'
        }

        this.onChangeFilter = this.onChangeFilter.bind(this);
        this.toggleTodo = this.toggleTodo.bind(this);
        this.handleAddTodo = this.handleAddTodo.bind(this);
        this.handleRemoveTodo = this.handleRemoveTodo.bind(this);
    }

    componentWillMount() {
        fetchTodoList((response) => {
            this.setState({todos: response.data})
        });
    }

    onChangeFilter(filter) {
        this.setState({filter});
    }

    handleAddTodo(text) {
        const todos = this.state.todos;
        let ids = _map(todos, 'id');
        let max = Math.max(...ids);
        createTodo({name: text, completed: false}, (response) => {
            todos.push(response.data);
            this.setState({todos});
        });
    }

    handleRemoveTodo(id) {
        const todos = this.state.todos;
        deleteTodo(id, (response) => {
            let filter = todos.filter(t => t.id !== id);
            this.setState({todos: filter});
        })
    }

    toggleTodo(id) {
        const todos = this.state.todos;
        let index = _findIndex(todos, {id});
        if (index !== -1) {
            let todo = todos[index];
            updateTodo({id, completed: !todo.completed}, (response) => {
                todos[index] = response.data;
                this.setState({todos});
            });
        }
    }

    filterTodo() {
        const {todos, filter} = this.state;

        switch (filter) {
            case 'SHOW_ALL':
                return todos
            case 'SHOW_COMPLETED':
                return todos.filter(t => t.completed)
            case 'SHOW_ACTIVE':
                return todos.filter(t => !t.completed)
        }
    }

    countUncompletedTodo() {
        let todos = this.state.todos;
        return todos.filter(t => !t.completed).length;
    }

    render() {
        return (
            <div className="todos">
                <div className="todos--header">
                    You've got {this.countUncompletedTodo()} things to do
                </div>
                <Filter onClick={this.onChangeFilter} />
                <List todos={this.filterTodo()} onTodoClick={this.toggleTodo} onRemoveTodo={this.handleRemoveTodo} />
                <Create onSaveTodo={this.handleAddTodo} />
            </div>
        )
    }
}

export default Index;
