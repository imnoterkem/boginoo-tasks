import React from 'react'

export const FormInput=(props)=>{
    let {classname, type, label, placeholder, ...others}=props;
    return (
        <div className='mt-5'>
            <div>{label}</div>
            <input className={classname} placeholder={placeholder} {...others} />
        </div>
    )
}