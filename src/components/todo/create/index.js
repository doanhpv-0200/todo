import React from 'react';
import InputField from 'components/extends/input';
import './create.scss';

class CreateTodo extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            isCreating: false,
            message: ''
        }

        this.onCancel = this.onCancel.bind(this);
        this.onSaveTodo = this.onSaveTodo.bind(this);
    }

    onSaveTodo() {
        let text = this.todo.getValue();
        if (!text) {
            this.setState({
                message: 'Please insert thing you want to do.'
            });
        } else {
            if (this.props.onSaveTodo) {
                this.props.onSaveTodo(text);
                this.onCancel();
            }
        }
    }

    onCancel() {
        this.todo.setState({value: ''});
        this.setState({isCreating: false});
    }

    render() {
        if (this.state.isCreating) {
            return (
                <div className="create-todo creating">
                    <InputField
                        name="todo"
                        className="todo-input"
                        placeholder="New thing to do"
                        ref={(c) => {this.todo = c;}}
                        style={{width: '100%'}}
                        message={this.state.message}
                    />
                    <div className="button-group">
                        <span onClick={this.onSaveTodo}>Save</span>
                        <span onClick={this.onCancel}>Cancel</span>
                    </div>
                </div>
            )
        }

        return (
            <div className="create-todo">
                <div className="new-button">
                    <span onClick={() => {this.setState({isCreating: true})}}>+</span>
                    New thing to do
                </div>
            </div>
        )
    }
}

export default CreateTodo;
