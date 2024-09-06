import React from "react";

export default function Header(props) {
    const { isMenuOpen, setIsMenuOpen } = props
    return (
        <header className="bg-white shadow-md p-4">
            <div className="flex items-center justify-between">
                <button onClick={() => setIsMenuOpen(!isMenuOpen)} className="md:hidden">
                    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                    </svg>
                </button>
                <h1 className="text-xl font-semibold">Dashboard</h1>
                <div className="flex items-center space-x-2">
                    <span>John Doe</span>
                    <div className="h-8 w-8 rounded-full bg-gray-500 text-white flex">
                        <span className="m-auto">JD</span>
                    </div>
                </div>
            </div>
        </header>
    )
}