import React from 'react';


const InputError = (props) => {
  return (
    <div className='container__input'>
      <label htmlFor={props.labelname}>{props.labelname}</label>
      <input {...props} className="input__block" id={props.labelname} />
      <span className='error'>{props.error && props.error}</span>
    </div>
  )
}

export default InputError