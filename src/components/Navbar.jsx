import React from 'react'
import { CiUser } from "react-icons/ci";
import { MdOutlineShoppingCart } from "react-icons/md";
import { RiMenu2Line } from "react-icons/ri";
const Navbar = () => {
  return (
    <>
    <div className="bg-primary md:bg-primaryDark">
<div className="container justify-between items-center py-3 hidden  md:flex">

    <div className="flex gap-8 items-center">
        <h2 className="text-white text-[40px]">Logo</h2>
        <div className="relative">
            <input type="text" className="px-4 py-3 rounded-sm w-[300px]" placeholder='Search...'/>
        </div>
    </div>
    <div className="text-white flex gap-6 text-[26px]" >
        <CiUser/>
        <MdOutlineShoppingCart/>
        <RiMenu2Line/>

    </div>
</div>
<div className='container flex justify-between items-center text-[26px] py-4 md:hidden '>
<RiMenu2Line/>
<div>Logo</div>
<MdOutlineShoppingCart/>

</div>
    </div>
    <div className="bg-primary hidden md:block">
        < ul className="container flex gap-8 uppercase py-4 text-white">
<a href="#">Home</a>
<a href="#">Shop</a> 
<a href="#">Blogs</a> 
<a href="#">Posts</a> 
<a href="#">About</a> 
<a href="#">Contact</a> 
</ul>
   </div>
    </>
  )
}

export default Navbar