import React from "react";
import { Link } from "react-router-dom";

const Footer=()=>{
    return (
        <div>
        <div className="bg-blue py-4"></div>        
        <div className='bg-yellow py-4'>
        <div className="container mx-auto px-4">
            <nav className="flex justify-center">
            <Link to="/" className="mx-2">Home</Link>
            <Link to="/books" className="mx-2">Books</Link>
            <Link to="/cart" className="mx-2">Cart</Link>
            <Link to="" className="mx-2">Checkout</Link>
            </nav>
            <p className="text-center mt-4">&copy; 2024 Your Company. All rights reserved.</p>
        </div>
        </div>
        </div>
    )
}

export default Footer;