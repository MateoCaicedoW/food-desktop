import React, { useState } from "react";
import Header from "./Header.jsx";
import { Outlet } from "react-router-dom";
import Sidebar from "./Sidebar.jsx";


export default function Layout() {
    const [isMenuOpen, setIsMenuOpen] = useState(false)

    return (
        <div className="flex h-screen bg-gray-100">
            <Sidebar isMenuOpen={isMenuOpen} />

            {/* Main Content */}
            <div className="flex-1 flex flex-col overflow-hidden">
                {/* Header */}
                <Header isMenuOpen={isMenuOpen} setIsMenuOpen={setIsMenuOpen}/>

                {/* Dashboard Content */}
                <main className="flex-1 overflow-x-hidden overflow-y-auto bg-gray-200 p-8">
                    <Outlet />
                </main>
            </div>
        </div>
    )
}