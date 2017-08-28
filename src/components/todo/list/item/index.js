import React from 'react';
import PropTypes from 'prop-types';
import Checkbox from 'components/extends/checkbox'
import './item.scss';

const TodoItem = ({onClick, onRemove, name, completed}) => (
    <div className="todo__item">
        <Checkbox onClick={onClick} label={name} checked={completed} onClick={onClick}/>
        <div className="button-remove">
            <span onClick={onRemove}>-</span>
        </div>
    </div>
)

TodoItem.propTypes = {
    name: PropTypes.string.isRequired,
    completed: PropTypes.bool.isRequired,
    onClick: PropTypes.func.isRequired
}

TodoItem.defaultProps = {
    name: 'To do',
    completed: true
}

export default TodoItem;
