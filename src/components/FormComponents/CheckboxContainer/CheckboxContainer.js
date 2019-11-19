import React from 'react';
import PropTypes from 'prop-types';
const CheckboxContainer = ({name, checkboxText}) => {
    return (
        <div className="checkbox-container">
            <span className="rq-checkbox">
                  <input type="checkbox" id={name}/>
                  <label htmlFor={name}>{checkboxText}</label>
            </span>
        </div>
    );
};
CheckboxContainer.propTypes = {
    name: PropTypes.string,
    checkboxText: PropTypes.string
}
export default CheckboxContainer;