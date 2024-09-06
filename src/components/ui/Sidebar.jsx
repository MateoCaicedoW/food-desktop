import { HomeIcon, SettingsIcon, ShoppingBagIcon, UserIcon } from 'lucide-react'
import React from 'react'
import { Link } from 'react-router-dom'

export default function Sidebar(props) {
    const { isMenuOpen } = props
    return (
        <aside className={`bg-black text-white w-64 min-h-screen p-4 ${isMenuOpen ? 'block' : 'hidden'} md:block`}>
            <nav>
                <ul className="space-y-2">
                    <li>

                        <Link to="/overview" className="flex items-center space-x-2 p-2 hover:bg-neutral-800 rounded transition-all duration-200">
                            <HomeIcon />
                            <span>Dashboard</span>
                        </Link>
                    </li>
                    <li>
                        <Link to ="/products" className='flex items-center space-x-2 p-2 hover:bg-neutral-800 rounded transition-all duration-200'>
                            <ShoppingBagIcon />
                            <span>Products</span>
                        </Link>
                    </li>
                    {/* <li>
                        <Link to="/contact" className="flex items-center space-x-2 p-2 hover:bg-neutral-800 rounded transition-all duration-200">
                            <ChartIcon />
                            <span>Analytics</span>
                        </Link>
                    </li>
                    <li>
                        <Link to="/" className="flex items-center space-x-2 p-2 hover:bg-neutral-800 rounded transition-all duration-200">
                            <UserIcon />
                            <span>Profile</span>
                        </Link>
                    </li> */}
                    <li>
                        <Link href="#" className="flex items-center space-x-2 p-2 hover:bg-neutral-800 rounded transition-all duration-200">
                            <SettingsIcon />
                            <span>Settings</span>
                        </Link>
                    </li>
                </ul>
            </nav>
        </aside>
        )
}