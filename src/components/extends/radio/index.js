import React from 'react';
import PropTypes from 'prop-types';

import 'components/extends/control.scss';
import './radio.scss';

const Radio = ({label, checked, onClick, name}) => (
    <label className="control control--radio">
        {label}
        {checked ?
            <input type="radio" name={name} onClick={onClick} defaultChecked="checked"/> :
            <input type="radio" name={name} onClick={onClick}/>
        }
        <div className="control__indicator" />
    </label>
);

Radio.propTypes = {
    label: PropTypes.string.isRequired,
    checked: PropTypes.bool.isRequired,
    onClick: PropTypes.func.isRequired,
    name: PropTypes.string
}

Radio.defaultProps = {
    label: 'Radio',
    checked: false,
    name: 'radio'
}

export default Radio;
