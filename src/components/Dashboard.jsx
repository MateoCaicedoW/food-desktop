import React, { useState } from 'react'
const Link = ({ children, ...props }) => <a {...props}>{children}</a>

// Icons (you can replace these with your preferred icon library or SVGs)
const HomeIcon = () => <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" /></svg>
const ChartIcon = () => <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" /></svg>
const UserIcon = () => <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" /></svg>
const SettingsIcon = () => <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z" /><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" /></svg>

export default function Dashboard() {
    const [isMenuOpen, setIsMenuOpen] = useState(false)

    return (
        <div className="flex h-screen bg-gray-100">
            {/* Sidebar */}
            <aside className={`bg-gray-800 text-white w-64 min-h-screen p-4 ${isMenuOpen ? 'block' : 'hidden'} md:block`}>
                <nav>
                    <ul className="space-y-2">
                        <li>
                            <Link href="#" className="flex items-center space-x-2 p-2 hover:bg-gray-700 rounded">
                                <HomeIcon />
                                <span>Dashboard</span>
                            </Link>
                        </li>
                        <li>
                            <Link href="#" className="flex items-center space-x-2 p-2 hover:bg-gray-700 rounded">
                                <ChartIcon />
                                <span>Analytics</span>
                            </Link>
                        </li>
                        <li>
                            <Link href="#" className="flex items-center space-x-2 p-2 hover:bg-gray-700 rounded">
                                <UserIcon />
                                <span>Profile</span>
                            </Link>
                        </li>
                        <li>
                            <Link href="#" className="flex items-center space-x-2 p-2 hover:bg-gray-700 rounded">
                                <SettingsIcon />
                                <span>Settings</span>
                            </Link>
                        </li>
                    </ul>
                </nav>
            </aside>

            {/* Main Content */}
            <div className="flex-1 flex flex-col overflow-hidden">
                {/* Header */}
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
                            <img className="w-8 h-8 rounded-full" src="/placeholder.svg?height=32&width=32" alt="User" />
                        </div>
                    </div>
                </header>

                {/* Dashboard Content */}
                <main className="flex-1 overflow-x-hidden overflow-y-auto bg-gray-200 p-4">
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 mb-4">
                        <div className="bg-white p-4 rounded-lg shadow">
                            <h2 className="text-gray-500 text-lg font-semibold pb-1">Users</h2>
                            <p className="text-3xl font-bold">1,257</p>
                            <span className="text-green-500 text-sm font-semibold">+30%</span>
                        </div>
                        <div className="bg-white p-4 rounded-lg shadow">
                            <h2 className="text-gray-500 text-lg font-semibold pb-1">Revenue</h2>
                            <p className="text-3xl font-bold">$15,300</p>
                            <span className="text-red-500 text-sm font-semibold">-5%</span>
                        </div>
                        <div className="bg-white p-4 rounded-lg shadow">
                            <h2 className="text-gray-500 text-lg font-semibold pb-1">Orders</h2>
                            <p className="text-3xl font-bold">234</p>
                            <span className="text-green-500 text-sm font-semibold">+20%</span>
                        </div>
                        <div className="bg-white p-4 rounded-lg shadow">
                            <h2 className="text-gray-500 text-lg font-semibold pb-1">Visits</h2>
                            <p className="text-3xl font-bold">8,765</p>
                            <span className="text-green-500 text-sm font-semibold">+15%</span>
                        </div>
                    </div>

                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 mb-4">
                        <div className="bg-white p-4 rounded-lg shadow">
                            <h2 className="text-gray-500 text-lg font-semibold pb-4">Recent Orders</h2>
                            <div className="overflow-x-auto">
                                <table className="min-w-full bg-white">
                                    <thead className="bg-gray-800 text-white">
                                        <tr>
                                            <th className="text-left py-3 px-4 uppercase font-semibold text-sm">Order ID</th>
                                            <th className="text-left py-3 px-4 uppercase font-semibold text-sm">Product</th>
                                            <th className="text-left py-3 px-4 uppercase font-semibold text-sm">Price</th>
                                        </tr>
                                    </thead>
                                    <tbody className="text-gray-700">
                                        <tr>
                                            <td className="py-3 px-4">#12345</td>
                                            <td className="py-3 px-4">Product A</td>
                                            <td className="py-3 px-4">$99.99</td>
                                        </tr>
                                        <tr className="bg-gray-100">
                                            <td className="py-3 px-4">#12346</td>
                                            <td className="py-3 px-4">Product B</td>
                                            <td className="py-3 px-4">$149.99</td>
                                        </tr>
                                        <tr>
                                            <td className="py-3 px-4">#12347</td>
                                            <td className="py-3 px-4">Product C</td>
                                            <td className="py-3 px-4">$79.99</td>
                                        </tr>
                                    </tbody>
                                </table>
                            </div>
                        </div>
                        <div className="bg-white p-4 rounded-lg shadow">
                            <h2 className="text-gray-500 text-lg font-semibold pb-4">Tasks</h2>
                            <div className="space-y-4">
                                <div className="flex items-center">
                                    <input type="checkbox" className="mr-2" />
                                    <span>Update product prices</span>
                                </div>
                                <div className="flex items-center">
                                    <input type="checkbox" className="mr-2" />
                                    <span>Review new customer accounts</span>
                                </div>
                                <div className="flex items-center">
                                    <input type="checkbox" className="mr-2" />
                                    <span>Prepare monthly report</span>
                                </div>
                                <div className="flex items-center">
                                    <input type="checkbox" className="mr-2" />
                                    <span>Update inventory stock</span>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="bg-white p-4 rounded-lg shadow">
                        <h2 className="text-gray-500 text-lg font-semibold pb-4">Sales Overview</h2>
                        <div className="bg-gray-300 h-64 rounded-lg">
                            {/* Placeholder for chart */}
                            <div className="flex items-center justify-center h-full">
                                <p className="text-gray-600">Chart Placeholder</p>
                            </div>
                        </div>
                    </div>
                </main>
            </div>
        </div>
    )
}