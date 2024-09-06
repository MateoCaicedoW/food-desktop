
import { X } from "lucide-react";
import React, { useEffect } from "react";

export default function Modal(props) {
    const { isOpen, setIsOpen, children, title} = props

    useEffect(() => {
        const handleEscape = (event) => {
            if (event.key === 'Escape') {
                setIsOpen(false)
            }
        }

        document.addEventListener('keydown', handleEscape)

        return () => {
            document.removeEventListener('keydown', handleEscape)
        }
    }, [])

    return (
        <div className={`fixed inset-0  bg-black bg-opacity-60 flex items-center justify-center ${isOpen ? '' : 'hidden'}`}>
            <div className="bg-white p-4 rounded shadow-md min-w-[600px]">
                <div className="flex justify-between items-center pb-4">
                    <h2 className="text-lg font-semibold">
                        {title}
                    </h2>
                    <button className="p-2 hover:bg-neutral-200 transition-all duration-200 rounded-lg" onClick={() => setIsOpen(false)}>
                        <X />
                    </button>
                </div>

                {children}
            </div>
        </div>
    )
}