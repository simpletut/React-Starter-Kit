import React from 'react';
import classNames from 'classnames';

// Textfield
export const renderTextField = ({label, input, helperText, meta: {asyncValidating, touched, error}, ...custom}) => (
    <div className={classNames({'async_validating': asyncValidating, 'form_item': true, 'invalid': touched && error, 'dirty': touched})}>

      <div className="form_label">
        <label>{label}</label>
      </div>
      
      <div className="form_input">
        <input {...input} {...custom} />
        <span className="bottom_border"></span>
      </div>

      <div className="invalid_msg">
        {error}
      </div>

      <div className={classNames({'helperText': true, 'active': helperText})}>
        <span>{helperText}</span>
      </div>

    </div>
);

// Textarea
export const renderTextarea = ({label, input, helperText, meta: {asyncValidating, touched, error}, ...custom}) => (
    <div className={classNames({'async_validating': asyncValidating, 'form_item': true, 'invalid': touched && error, 'dirty': touched})}>

      <div className="form_label">
        <label>{label}</label>
      </div>
      
      <div className="form_textarea">
        <textarea {...input} {...custom}></textarea>
        <span className="bottom_border"></span>
      </div>

      <div className="invalid_msg">
        {error}
      </div>

      <div className={classNames({'helperText': true, 'active': helperText})}>
        <span>{helperText}</span>
      </div>

    </div>
);