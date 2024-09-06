import React from "react";


export default function Label(props) {
    const { children, htmlFor } = props
    return (
        <label htmlFor={htmlFor} className="block text-sm font-medium text-black">
            {children}
        </label>
    )

}