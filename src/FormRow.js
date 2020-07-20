import React from 'react';

const FormRow =  props =>{

    return(
        <div className="form-row">
            <label>{props.label}</label>
            <input onChange={props.onChange} type="text" placeholder={props.placeholder}/>
        </div>
    );
}

export default FormRow;