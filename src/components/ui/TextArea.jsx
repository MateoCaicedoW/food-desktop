import React from "react";
import { ValidationError } from "./ValidationError.jsx";

export default function TextArea(props) {
    const { id, value, onChange, placeholder, cols, rows, name, errors} = props
    return (
        <div> 
            <textarea
                id={id}
                value={value}
                onChange={onChange}
                placeholder={placeholder}
                cols={cols}
                rows={rows}
                name={name}
                className={`rounded-lg focus:ring-0 border-1 border-neutral-300 focus:outline-neutral-400 focus:-outline-offset-1 ${props.className}`}
            />
            
            <ValidationError errors={errors} field={name} />
        </div>
    )
}