import React from "react";

export default function Input(props) {
    const { type, placeholder, value, onChange, className } = props
    return (
        <input
            type={type}
            placeholder={placeholder}
            value={value}
            onChange={onChange}
            className={`rounded-lg focus:ring-0 border-1 border-neutral-300 focus:outline-neutral-400 focus:-outline-offset-1 ${className}`}
        />
    )
}