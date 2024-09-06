import React from "react";

export default function Button(props) {
    const { children, onClick, className } = props
    return (
        <button onClick={onClick} className={`bg-black text-white px-4 py-2 rounded-lg hover:bg-neutral-700 transition-all duration-200 focus:ring-1 focus:ring-neutral-800 border-neutral-800 focus:outline-neutral-800 focus:-outline-offset-1 ${className}`}>
            {children}
        </button>
    )
}