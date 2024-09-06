import React from "react";

export default function TextArea(props) {
    const { id, value, onChange, placeholder, cols, rows} = props
    return (
        <textarea
            id={id}
            value={value}
            onChange={onChange}
            placeholder={placeholder}
            cols={cols}
            rows={rows}
            className={`rounded-lg focus:ring-0 border-1 border-neutral-300 focus:outline-neutral-400 focus:-outline-offset-1 ${props.className}`}
        />
    )
}