import React from 'react';
import PropTypes from 'prop-types';

import 'components/extends/control.scss';
import './checkbox.scss';

const Checkbox = ({label, checked, onClick}) => (
    <label className="control control--checkbox">
        {label}
        <input type="checkbox" onChange={onClick} checked={checked ? "checked" : ""}/>
        <div className="control__indicator" />
    </label>
);

Checkbox.propTypes = {
    label: PropTypes.string.isRequired,
    checked: PropTypes.bool.isRequired,
    onClick: PropTypes.func.isRequired
}

Checkbox.defaultProps = {
    label: 'Checkbox',
    checked: false
}

export default Checkbox;
