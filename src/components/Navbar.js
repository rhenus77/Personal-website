import React, {useState} from 'react'
import {AiOutlineClose, AiOutlineMenu} from 'react-icons/ai'
import { Link } from 'react-scroll'


const Navbar = () => {

     const [nav, setNav] = useState(false)
     const handleClick = () => setNav(!nav)

     const handleClose =()=> setNav(!nav)


  return (
    <div className='w-screen h-[60px] z-10 bg-zinc-200 fixed drop-shadow-lg'>
      <div className='px-2 flex justify-between items-center w-full h-full'>
        <div className='flex items-center'>
          <h1 className='text-3xl font-bold mr-4 sm:text-4xl'>RHENUS.</h1>
          <ul className='hidden md:flex gap-4'>
          <li><Link to="home" smooth={true} duration={500}>Home</Link></li>
          <li><Link to="about" smooth={true} offset={-200} duration={500}>About</Link></li>
          <li><Link to="support" smooth={true} offset={-50} duration={500}>Services</Link></li>
          <li><Link to="platforms" smooth={true} offset={-100} duration={500}>Portfolio</Link></li>
          <li><Link to="pricing" smooth={true} offset={-50} duration={500}>Contact</Link></li>


          </ul>
        </div>
        <div className='hidden md:flex pr-4'>
          <button className='border-none bg-transparent text-black mr-4'>
            Sign In
          </button>
          <button className='px-8 py-3'>Sign Up</button>
        </div>
        <div className='md:hidden mr-4' onClick={handleClick}>
            {!nav ? <AiOutlineMenu className='w-5' /> : <AiOutlineClose className='w-5' />}
          
        </div>
      </div>

      <ul className={!nav ? 'hidden' : 'md:hidden absolute bg-zinc-200 w-full h-[500px] px-8'}>
          <li className='border-b-2 border-zinc-300 w-full my-4'><Link onClick={handleClose} to="home" smooth={true} duration={500}>Home</Link></li>
          <li className='border-b-2 border-zinc-300 w-full my-4'><Link onClick={handleClose} to="about" smooth={true} offset={-200} duration={500}>About</Link></li>
          <li className='border-b-2 border-zinc-300 w-full my-4'><Link onClick={handleClose} to="support" smooth={true} offset={-50} duration={500}>Services</Link></li>
          <li className='border-b-2 border-zinc-300 w-full my-4'><Link onClick={handleClose} to="platforms" smooth={true} offset={-100} duration={500}>Portfolio</Link></li>
          <li className='border-b-2 border-zinc-300 w-full my-4'><Link onClick={handleClose} to="pricing" smooth={true} offset={-50} duration={500}>Contact</Link></li>

        <div className='flex flex-col my-4'>
            <button className='bg-transparent text-indigo-600 px-8 py-3 mb-4'>Sign In</button>
            <button className='px-8 py-3'>Sign Up</button>
        </div>
      </ul>
    </div>
  );
}

export default Navbar
