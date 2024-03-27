import React from 'react';
import { Link } from 'react-router-dom';

const Header = () => {
    return (
        <header className="main-head">
            <nav className='bg-yellow shadow-lg'>
                <div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8'>
                    <div className='flex justify-between h-16'>
                        <div className='flex py-4'>
                            <h1 className='flex-shrink-0 flex items-center text-xl font-bold'>NITTE</h1>
                            <div className='hidden md:block'>
                            <ul className='ml-10 flex space-x-4'>
                                <li>
                                    <Link className='text-gray-300 hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium' to="/">Home</Link>
                                </li>
                                <li>
                                    <Link className='text-gray-300 hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium' to="/about">About</Link>
                                </li>
                                <li>
                                    <Link className='text-gray-300 hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium' to="/books">Books</Link>
                                </li>
                                <li>
                                    <Link className='text-gray-300 hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium' to="/cart">Cart</Link>
                                </li>
                                <li>
                                    <Link className='text-gray-300 hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium' to="/checkout">Checkout</Link>
                                </li>
                            </ul>
                            </div>

                        </div>
                    </div>
                </div>

            </nav>
        </header>
    )
}

export default Header
