
import React from "react"
import { titleCase } from "../../system/utils.js"

export function ValidationError({errors, field}){
    const noErrors = errors === undefined || errors === null || Object.keys(errors).length === 0
    return (
        <div>
            {noErrors ? null :(
                <p>
                    {Object.keys(errors).filter((error) => error === field).map((error, index) => (
                        errors[error].map((message, index) => (
                            <span key={index} className="text-red-500 text-sm">{titleCase(message)}</span>
                        ))
                    ))}
                </p>
            )}
        </div>
    )
}