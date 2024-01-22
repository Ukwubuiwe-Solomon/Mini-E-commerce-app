import React from "react";
import { FaBars, FaSearch, FaShoppingCart, FaTimes, FaUser } from "react-icons/fa";
import logo from "/logo.png";
import { Link } from "react-router-dom";
import { useState } from "react";
import { useSelector } from "react-redux";
// eslint-disable-next-line no-unused-vars


const Navbar = () => {
  const productData = useSelector((state)=> state.solo.productData)
  console.log(productData)
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  const toggleMenu = ()=>{
    setIsMenuOpen(!isMenuOpen)
}
    const navItems = [
        {title: "Jewelry & Accessories", path:"/"},
        {title: "Clothing & Shoes", path:"/"},
        {title: "Home & Living", path:"/"},
        {title: "Wedding & Party", path:"/"},
        {title: "Toys & Entertainment", path:"/"},
        {title: "Art & Collectibles", path:"/"},
        {title: "Craft Supplies & Tools", path:"/"}
    ]
  
    
  return (
    <header className="max-w-screen-2xl xl:px-28 px-4 mx-auto absolute top-0 left-0 right-0 ">
      <nav className="flex items-center justify-between container md:py-4 pt-6 pb-3">
        <FaSearch className="text-black w-5 h-5 cursor-pointer hidden md:block"/>
        <a href="/">
          <img src={logo} alt="" />
        </a>
        <div className="text-black text-lg flex gap-6 items-center">
          <div className="hidden sm:flex gap-2 items-center">
            <a href="/" className="flex items-center gap-2">
              <FaUser /> Account
            </a>
          </div>
          <div className="relative">
            <Link to="/cart">
              <FaShoppingCart />
              <span className="absolute -top-3 left-3 text-red-600 font-bold">
                {productData.length}
              </span>
              </Link>
          </div>
        </div>
        <div className="sm:hidden">
          <button onClick={toggleMenu}>
         {isMenuOpen ? <FaTimes className="text-black h-5 w-5"/> :  <FaBars className="text-black h-5 w-5"/>}
          </button>
        </div>
      </nav>
      <hr />
      <div className="pt-4">
         <ul className="lg:flex items-center justify-between text-Black hidden">
         {navItems.map(({title, path})=>(
                <li key={title}>
                    <Link to="/" className="hover:text-orange-500">{title}</Link>
                </li>
                ))}
         </ul>
      </div>
      <div>
      <ul className={`bg-Black text-white px-4 py-2 rounded ${isMenuOpen ? "" : "hidden"}`}>
         {navItems.map(({title, path})=>(
                <li key={title} className="hover:text-orange-500 my-3 cursor-pointer">
                    <Link to="/">{title}</Link>
                </li>
                ))}
         </ul>
      </div>

    </header>
  );
};

export default Navbar;
