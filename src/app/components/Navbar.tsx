import React from 'react'
import { RxHamburgerMenu } from "react-icons/rx";
import Link from 'next/link';
import { IoCartOutline } from "react-icons/io5";
import { IoSearch } from "react-icons/io5";
import { useAppSelector } from '@/redux/hooks';

const Navbar = ({setShowCart}: any) => {

const cartCount = useAppSelector((state) => state.cartReducer.length);

  return (
    <div className='bg-white py-4 sticky top-0 z-10'>
      <div className="container flex justify-between items-center">
      <RxHamburgerMenu className='sm:hidden text-[26px]'/>
      <Link href ="/" className='text-4xl font-semibold hover:text-accent'>Logo</Link>

      <ul className='gap-6 hidden sm:flex'>
      <Link href ="/" className='navLink'>Home</Link>
     
     
      <li> 
       <Link href ="../../Blog" className='navLink'>Blog</Link>
      </li>
      <li> 
       <Link href ="../../NewA" className='navLink'>Products</Link>
      </li>
      <li> 
       <Link href ="../../Contact" className='navLink'>Contact</Link>
      </li>
      </ul>

      <div className="flex gap-6 text-[26px]">
        <div className='relative cursor-pointer' onClick={() => setShowCart (true)}>
        <IoCartOutline />
        <div className='absolute top-[-15px] right[-10px] bg-red-600 w-[25px] h-[25px] rounded-full text-white
        text-[14px] grid place-items-center'> {cartCount}
        </div>
        </div>
        <IoSearch />
    </div>
      </div>
    </div>
  )
}

export default Navbar
