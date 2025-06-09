import React, { useState } from 'react';

import { Link } from 'react-router-dom';

const Nav = ({ cart, setCart }) => {
  const [menu, setMenu] = useState(false);
  const [cartOpen, setCartOpen] = useState(false);

  const handleClick = () => {
    setMenu((prev) => !prev);
  };

  return (
    <div className="bg-pink-50 px-4 py-2 shadow relative">
      <div className="flex items-center justify-between w-full">
        <div className="flex items-center gap-20">
          
          <p className="text-3xl text-red-500">STAMP</p>
          <button className="sm:hidden" onClick={handleClick}>🟰</button>
        </div>

        <div className="relative">
          <button
            onClick={() => setCartOpen(!cartOpen)}
            className="relative hover:text-red-500 text-xl block"
          >
            🛒
            {cart.length > 0 && (
              <span className="absolute -top-2 -right-2 bg-red-500 text-white text-xs w-5 h-5 flex items-center justify-center rounded-full">
                {cart.length}
              </span>
            )}
          </button>

          {cartOpen && (
            <div className="absolute right-0 mt-2 w-64 bg-white border border-gray-300 rounded shadow-lg z-50 p-4">
              <h3 className="font-bold mb-2">Cart Items</h3>
              {cart.length === 0 ? (
                <p className="text-gray-500">Your cart is empty</p>
              ) : (
                <ul>
                  {cart.map((item, i) => (
                    <li key={i} className="mb-2 border-b pb-2 flex justify-between items-start">
                      <div>
                        <p>{item.name}</p>
                        <p>${item.price}</p>
                      </div>
                      <button
                        onClick={() => setCart(cart.filter((_, index) => index !== i))}
                        className="text-red-500 text-sm hover:underline ml-2"
                      >
                        Remove
                      </button>
                    </li>
                  ))}
                </ul>
              )}
            </div>
          )}
        </div>
      </div>

      {menu && (
        <nav className="sm:hidden mt-2 flex flex-col gap-2">
          <Link to="/drops">DROPS</Link>
          <Link to="/about">ABOUT</Link>
          <Link to="/brands">BRANDS</Link>
        </nav>
      )}

      <nav className="hidden sm:flex justify-end gap-10 pr-6 mt-2">
        <Link to="/drops">DROPS</Link>
        <Link to="/about">ABOUT</Link>
        <Link to="/brands">BRANDS</Link>
      </nav>
    </div>
  );
};

export default Nav;