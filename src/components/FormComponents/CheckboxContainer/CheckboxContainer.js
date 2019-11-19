import React from 'react';
import PropTypes from 'prop-types';
const CheckboxContainer = ({name, text}) => {
    return (
        <div className="checkbox-container">
            <span className="rq-checkbox">
                  <input type="checkbox" id={name}/>
                  <label htmlFor={name}>{text}</label>
            </span>
        </div>
    );
};
CheckboxContainer.propTypes = {
    name: PropTypes.string,
    text: PropTypes.text
}
export default CheckboxContainer;