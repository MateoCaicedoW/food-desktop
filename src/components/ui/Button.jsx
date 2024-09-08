import React from "react";

const Button = (props) =>{
    const { children, onClick, className, disabled } = props
    return (
        <button onClick={onClick} disabled={disabled} className={`bg-black text-white px-4 py-2 rounded-lg hover:bg-neutral-700 transition-all duration-200 focus:ring-1 focus:ring-neutral-800 border-neutral-800 focus:outline-neutral-800 focus:-outline-offset-1 ${className}`}>
            {children}
        </button>
    )
}

const SecondaryButton = (props) =>{
    const { children, onClick, className } = props
    return (
        <button onClick={onClick} className={`border  bg-white text-black px-4 py-2 rounded-lg hover:bg-neutral-100 transition-all duration-200 focus:ring-1 focus:ring-neutral-800 border-neutral-500 focus:outline-neutral-800 focus:-outline-offset-1 ${className}`}>
            {children}
        </button>
    )
}

export {
    Button,
    SecondaryButton
}