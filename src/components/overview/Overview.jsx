import React from 'react'


export default function Overview() {
    return (
        <>
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
        </>
    )
}