import React, {useState} from 'react'
import {AiOutlineClose, AiOutlineMenu} from 'react-icons/ai'

const Navbar = () => {
  const [nav, setNav] = useState(true)

  const handleNav = () => {
    setNav(!nav)
  }

  return (
    <div className='
    flex 
    justify-between 
    text-white
    items-center 
    h-24
    max-w-[1240px] 
    mx-auto
    px-4 
    '>
      <h1 className='
      w-full 
      text-3xl 
      font-bold 
      text-[#22D3EE]'>RHENUS.</h1>
      <ul className='md:flex hidden cursor-pointer'>
        <li className='p-4'>Services</li>
        <li className='p-4'>Contact</li>
        <li className='p-4'>About</li>
      </ul>
      <div onClick={handleNav} className='block md:hidden cursor-pointer'>
        {!nav ? <AiOutlineClose size={20}/> : <AiOutlineMenu size={20}/>} 
      </div>
      <div className={!nav ? 'fixed left-0 top-0 w-[80%] h-full border-r border-r-white bg-[#182a3b] ease-in-out duration-500' : 'fixed left-[-100%] top-0 w-[60%] h-full border-r border-r-white bg-[#182a3b]'}>
      <h1 className='
        w-full 
        text-3xl 
        font-bold 
        text-[#22D3EE] m-4'>RHENUS.</h1>
        <ul className='uppercase p-4 cursor-pointer'>
          <li className='p-4 border-b border-white'>Services</li>
          <li className='p-4 border-b border-white'>Contact</li>
          <li className='p-4 border-b border-white'>About</li>
        </ul>
      </div>
    </div>
  )
}

export default Navbar