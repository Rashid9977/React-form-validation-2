import React, { useState } from 'react'
import './forminput.css'

const Forminput = (props) => {
    const [focused, setFocused] = useState(false)
    const handleFocus = () => {
        setFocused(true)
    }
    const { id, onChange, label, errorMessage, ...inputProps } = props
    return (
        <div className='form-input'>
            <label>{label}</label>
            <input name={props.name} type="text" pattern='^[a-zA-Z0-9]{3,16}$' {...inputProps} onChange={onChange}
                focused={focused.toString()}
                onBlur={handleFocus}
                onFocus={() => inputProps.name === "confirmPassword" && setFocused(true)}
            />
            <span>{errorMessage}</span>
        </div>
    )
}

export default Forminput