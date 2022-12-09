import React from 'react'
import Typed from 'react-typed';
import {AiFillPhone, AiOutlineInstagram, AiOutlineMail, AiOutlineTwitter, AiOutlineWhatsApp} from 'react-icons/ai';
import {FaFacebook} from 'react-icons/fa'



const Hero = ({imageUrl}) => {
  return (
    <div className='
    flex 
    justify-between 
    text-white
    items-center
    bg-[{imageUrl}] 
    md:bg-[#142b3d]
    max-w-100%  
    w-full 
    h-screen  
    mx-auto
    relative z-0
    '>

        <img className='w-full h-[100%] object-cover mix-blend-overlay bg-gray-900/80 absolute md:hidden' src={imageUrl} alt="/" />
      
      <div className='flex flex-col justify-betweem items-center md:mt-[-10px] mt-[48px] px-16 md:px-8'>
        <div className='md:text-5xl text-4xl font-bold  text-blue-00'>
          <Typed
              strings={['Designer', 'Developer']}
              typeSpeed={80}
              backSpeed={120}
              loop
            />
        </div>
           
           <div className='py-8 px-16 md:py-6 md:px-10'>
            <p className='text-2xl font-bold'>Hello I am a Developer and Designer</p>
           </div>
           
                   <button className='md:bg-blue-500 cursor-pointer hover:bg-blue-600 bg-blue-300 w-[200px] rounded-md font-medium my-6 mx-auto py-2 text-black md:text-white'>Get Started</button>
      </div>
        <ul className='md:flex md:flex-col items-end mt-[-150px] hidden md:px-10'>
            <li className='flex flex-wrap gap-4 text-green-500  py-2 cursor-pointer'><AiOutlineWhatsApp size={22}/></li>
            <li className='flex flex-wrap g text-blue-500  py-2 cursor-pointer'><AiOutlineTwitter size={22}/></li>
            <li className='flex flex-wrap g text-[#E1306C]  py-2 cursor-pointer'><AiOutlineInstagram size={22}/></li>
            <li className='flex flex-wrap g text-gray-300  py-2 align-text-bottom cursor-pointer'><AiOutlineMail size={22}/></li>
            <li className='flex flex-wrap g text-gray-300  py-2 align-text-bottom cursor-pointer'><AiFillPhone size={22}/></li>
            <li className='flex flex-wrap g text-blue-400  py-2 align-text-bottom cursor-pointer'><FaFacebook size={22}/></li>

        </ul>
        

        {/* image */}
          
     <img src='images/y.png' alt='hero' className='hidden md:h-[600px] md:mt-32 px-[340px] absolute inset-0 md:flex md:flex-right md:w-full z-10'/>
          
    </div>
  )
}

export default Hero