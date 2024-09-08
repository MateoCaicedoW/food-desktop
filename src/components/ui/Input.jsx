import React from "react";
import { ValidationError } from "./ValidationError.jsx";

export default function Input(props) {
    const { type, placeholder, value, onChange, className, name, errors } = props
    return (
        <div>
            <input
                name={name}
                type={type}
                placeholder={placeholder}
                value={value}
                onChange={onChange}
                className={`rounded-lg focus:ring-0 border-1 border-neutral-300 focus:outline-neutral-400 focus:-outline-offset-1 ${className}`}
            />
            <ValidationError errors={errors} field={name} />

        </div>
    )
}