import React from 'react';
import PropTypes from 'prop-types';
import './input.scss';

class InputField extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            value: props.value || ''
        };

        this.handleChange = this.handleChange.bind(this);
        this.handleOnBlur = this.handleOnBlur.bind(this);
    }

    handleOnBlur(event) {
        if( this.props.onBlur && typeof this.props.onBlur === 'function') {
            this.props.onBlur(event);
        }
    }

    handleChange(event) {
        this.setState({value: event.target.value});
        if (this.props.onChange) {
            this.props.onChange(event.target.value);
        }
    }

    componentWillReceiveProps(nextProps) {
        if (nextProps.value !== this.props.value) {
            this.setState({value: nextProps.value});
        }
    }

    getValue() {
        return this.state.value ? this.state.value.trim() : null;
    }

    render() {
        return (
            <div className='input-field-container'>
                <input
                    type={this.props.type || 'text'}
                    value={this.state.value || ''}
                    name={this.props.name}
                    onChange={this.handleChange}
                    onBlur={this.handleOnBlur}
                    className={this.props.className ? `input-field ${this.props.className}` : 'input-field'}
                    placeholder={this.props.placeholder || ''}
                    ref={this.props.inputRef}
                    style={this.props.style}
                    disabled={this.props.disabled ? true : false}
                    maxLength={this.props.maxLength || -1}
                />
                {this.props.message ?
                    <div className='field__message field__message--error'>
                        <span>{this.props.message}</span>
                    </div> : null
                }
            </div>
        );
    }
}

InputField.propTypes = {
    type        : PropTypes.string,
    defaultValue: PropTypes.bool,
    name        : PropTypes.string,
    onChange    : PropTypes.func,
    className   : PropTypes.string,
    placeholder : PropTypes.string,
    message     : PropTypes.string
};

export default InputField;
