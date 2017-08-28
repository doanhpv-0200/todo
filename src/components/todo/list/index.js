import React from 'react';
import PropTypes from 'prop-types';
import Todo from './item';
import './list.scss';

const TodoList = ({todos, onTodoClick, onRemoveTodo}) => (
    <div className="todo__list">
    {todos.map(todo =>
        <Todo key={todo.id} {...todo} onClick={() => onTodoClick(todo.id)} onRemove={() => onRemoveTodo(todo.id)} />
    )}
    </div>
)

TodoList.propTypes = {
    todos: PropTypes.arrayOf(
        PropTypes.shape({
            id: PropTypes.number.isRequired,
            completed: PropTypes.bool.isRequired,
            name: PropTypes.string.isRequired
        }).isRequired
    ).isRequired,
    onTodoClick: PropTypes.func.isRequired
}


export default TodoList;
