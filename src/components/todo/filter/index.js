import React from 'react';
import PropTypes from 'prop-types';
import Radio from 'components/extends/radio';
import './filter.scss';

const Filter = ({onClick}) =>(
    <div className="todo__filter">
        <span className="todo__filter-item">
            <Radio onClick={() => onClick('SHOW_ALL')} label="Show All" checked={true} name="filter" />
        </span>
        <span className="todo__filter-item">
            <Radio onClick={() => onClick('SHOW_COMPLETED')} label="Show Completed" checked={false} name="filter" />
        </span>
        <span className="todo__filter-item">
            <Radio onClick={() => onClick('SHOW_ACTIVE')} label="Show Active" checked={false} name="filter" />
        </span>
    </div>
)

Filter.propTypes = {
    onClick: PropTypes.func.isRequired
}

export default Filter;
