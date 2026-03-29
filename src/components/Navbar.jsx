import React, { useState, useContext } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useCart } from '../context/CartContext';
import { UserIcon, ShoppingCartIcon } from '@heroicons/react/24/outline';
import { SearchContext } from "../context/SearchContext";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [showMobileShoes, setShowMobileShoes] = useState(false);
  const { cartItems } = useCart();
  const { query, setQuery } = useContext(SearchContext);
  const navigate = useNavigate();

  const handleKeyPress = (e) => {
    if (e.key === "Enter") {
      navigate("/search");
      setIsOpen(false); 
    }
  };

  const closeMobileMenu = () => setIsOpen(false);

  return (
    <nav className="bg-white shadow-md fixed top-0 w-full z-50">
      <div className="max-w-7xl mx-auto px-4 py-2 flex justify-between items-center">
        {/* Logo */}
        <div className="text-xl font-bold text-black">
          <Link to="/" onClick={closeMobileMenu}>GORDON & BROS</Link>
        </div>

        {/* Desktop Menu */}
        <ul className="hidden md:flex space-x-6 text-black items-center">
          <li><Link to="/" onClick={closeMobileMenu}>Home</Link></li>
          <li className="relative group">
            <Link to="/Shoes" className="hover:text-blue-600">Shoes</Link>
            <div className="absolute opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300 delay-150 flex flex-col bg-white shadow-lg mt-2 top-7 rounded-md border w-40">
              <Link to="/Shoes/Boots" className="px-4 py-2 hover:bg-gray-100">Boots</Link>
              <Link to="/Shoes/Sandals" className="px-4 py-2 hover:bg-gray-100">Sandals</Link>
              <Link to="/Shoes/Formal" className="px-4 py-2 hover:bg-gray-100">Formal</Link>
              <Link to="/Shoes/Sneakers" className="px-4 py-2 hover:bg-gray-100">Sneakers</Link>
            </div>
          </li>
          <li><Link to="/About" onClick={closeMobileMenu}>About</Link></li>
          <li><Link to="/Contact" onClick={closeMobileMenu}>Contact</Link></li>
        </ul>

        {/* Desktop Search + Icons */}
        <div className="hidden md:flex items-center space-x-4 relative">
          <input
            type="text"
            placeholder="Search..."
            className="px-3 py-1 rounded-full border text-black w-52 outline-none"
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            onKeyDown={handleKeyPress}
          />
          <div onClick={() => { navigate('/signup'); closeMobileMenu(); }} className="cursor-pointer">
            <UserIcon className="w-6 h-6 text-black" />
          </div>
          <div onClick={() => { navigate('/cart'); closeMobileMenu(); }} className="relative cursor-pointer">
            <ShoppingCartIcon className="w-6 h-6 text-black" />
            {cartItems.length > 0 && (
              <span className="absolute top-0 right-0 bg-red-500 text-white rounded-full px-1 text-xs">
                {cartItems.length}
              </span>
            )}
          </div>
        </div>

        {/* Mobile Menu Button */}
        <div className="md:hidden">
          <button onClick={() => setIsOpen(!isOpen)}>
            <svg className="w-6 h-6" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          </button>
        </div>
      </div>

      {/* Mobile Dropdown */}
      {isOpen && (
        <div className="md:hidden px-4 pb-4 pt-2 bg-white shadow-md rounded-b-md space-y-2 transition-all duration-300">
          <Link to="/" onClick={closeMobileMenu} className="block px-4 py-2 rounded hover:bg-gray-100 transition">
            Home
          </Link>

          {/* Shoes dropdown */}
          <div>
            <button onClick={() => setShowMobileShoes(!showMobileShoes)} className="w-full text-left px-4 py-2 rounded hover:bg-gray-100 transition">
              Shoes {showMobileShoes ? '▲' : '▼'}
            </button>
            {showMobileShoes && (
              <div className="ml-4 mt-1 space-y-1">
                <Link to="/Shoes/Boots" onClick={closeMobileMenu} className="block px-4 py-2 rounded hover:bg-gray-100">Boots</Link>
                <Link to="/Shoes/Sandals" onClick={closeMobileMenu} className="block px-4 py-2 rounded hover:bg-gray-100">Sandals</Link>
                <Link to="/Shoes/Formal" onClick={closeMobileMenu} className="block px-4 py-2 rounded hover:bg-gray-100">Formal</Link>
                <Link to="/Shoes/Sneakers" onClick={closeMobileMenu} className="block px-4 py-2 rounded hover:bg-gray-100">Sneakers</Link>
              </div>
            )}
          </div>

          <Link to="/About" onClick={closeMobileMenu} className="block px-4 py-2 rounded hover:bg-gray-100 transition">About</Link>
          <Link to="/Contact" onClick={closeMobileMenu} className="block px-4 py-2 rounded hover:bg-gray-100 transition">Contact</Link>

          {/* Mobile Icons */}
          <div className="flex items-center justify-between mt-4 px-4">
            <div onClick={() => { navigate('/signup'); closeMobileMenu(); }} className="cursor-pointer">
              <UserIcon className="w-8 h-8 text-black" />
            </div>
            <div onClick={() => { navigate('/cart'); closeMobileMenu(); }} className="relative cursor-pointer">
              <ShoppingCartIcon className="w-8 h-8 text-black" />
              {cartItems.length > 0 && (
                <span className="absolute top-0 right-0 bg-red-500 text-white rounded-full px-1 text-xs">
                  {cartItems.length}
                </span>
              )}
            </div>
          </div>
        </div>
      )}
    </nav>
  );
}