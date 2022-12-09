import React from 'react';
import {MdComputer} from 'react-icons/md';
import {HiDesktopComputer} from 'react-icons/hi';
import {RiComputerFill,RiComputerLine} from 'react-icons/ri';


function Services({title,imageUrl,body}) {
  return (
    <div name='services' className=''>
      <div className='flex justify-center font-bold text-4xl mt-10'>
        <h3 className='text-[#142b3d]'>Services</h3>
      </div>
      <div className='h-[400px] w-[100%] px-20 py-8 flex flex:wrap justify-between'>
              {/* one */}
      <div className='w-[300px] rounded-xl text-white bg-[#142b3d] overflow-hidden hover:scale-110 shadow-[0px_0px_15px_-5px] hover:shadow-[0px_0px_15px_0px] transition duration-150 ease-in'>
        <div className='overflow-hidden h-[200px] mx-16'>
          {/* <img src={imageUrl} alt='img'/> */}
          <MdComputer size={150}/>
        </div>
        <div className='m-4 mt-2 '>
          <div className=''>
            <h3 className=''>{title}</h3>
          </div>
          <div className=''>
            <p className=''>{body}</p>
          </div>
          <div className='flex justify-center '>
            <button className='p-2 uppercase hover:bg-blue-500 mb-0 rounded'>Read More</button>
          </div>
        </div>       
      </div>

      {/*two*/}
      <div className='w-[300px] rounded-xl text-white bg-[#142b3d] overflow-hidden hover:scale-110 shadow-[0px_0px_15px_-5px] hover:shadow-[0px_0px_15px_0px] transition duration-150 ease-in'>
        <div className='overflow-hidden h-[200px] mx-16'>
          {/* <img src={imageUrl} alt='img'/> */}
          <HiDesktopComputer size={150} />
        </div>
        <div className='m-4 mt-2 '>
          <div className=''>
            <h3 className=''>{title}</h3>
          </div>
          <div className=''>
            <p className=''>{body}</p>
          </div>
          <div className='flex justify-center '>
            <button className='p-2 hover:bg-blue-500 uppercase mb-0 rounded'>Read More</button>
          </div>
        </div>       
      </div>

      {/* three */}
      <div className='w-[300px] rounded-xl text-white bg-[#142b3d] overflow-hidden hover:scale-110 shadow-[0px_0px_15px_-5px] hover:shadow-[0px_0px_15px_0px] transition duration-150 ease-in'>
        <div className='overflow-hidden h-[200px] mx-16'>
          {/* <img src={imageUrl} alt='img'/> */}
          <RiComputerFill size={150}/>
        </div>
        <div className='m-4 mt-2 '>
          <div className=''>
            <h3 className=''>{title}</h3>
          </div>
          <div className=''>
            <p className=''>{body}</p>
          </div>
          <div className='flex justify-center '>
            <button className='p-2 hover:bg-blue-500 uppercase mb-0 rounded'>Read More</button>
          </div>
        </div>       
      </div>

      {/* four */}
      <div className='w-[300px] rounded-xl text-white bg-[#142b3d] overflow-hidden hover:scale-110 shadow-[0px_0px_15px_-5px] hover:shadow-[0px_0px_15px_0px] transition duration-150 ease-in'>
        <div className='overflow-hidden h-[200px] mx-16'>
          {/* <img src={imageUrl} alt='img'/> */}
          <RiComputerLine size={150}/>
        </div>
        <div className='m-4 mt-2 '>
          <div className=''>
            <h3 className=''>{title}</h3>
          </div>
          <div className=''>
            <p className=''>{body}</p>
          </div>
          <div className='flex justify-center '>
            <button className='p-2 hover:bg-blue-500 uppercase mb-0 rounded'>Read More</button>
          </div>
        </div>       
      </div>
      </div>

    {/*  */}
    <div className='max-w-[1240px] mx-auto'>
            <div className='text-center'>
                <h2 className='text-5xl font-bold'>Trusted by developers across the world</h2>
            </div>

            <div className='grid md:grid-cols-3 gap-1 py-10 px-2 text-center'>
                <div className='border py-8 rounded-xl shadow-xl' >
                    <p className='text-6xl font-bold text-[#142b3d]'>100%</p>
                    <p className='text-gray-400 mt-2'>Completion</p>
                </div>
                <div  className='border py-8 rounded-xl shadow-xl' >
                    <p className='text-6xl font-bold text-[#142b3d]'>24/7</p>
                    <p className='text-gray-400 mt-2'>Delivery</p>
                </div>
                <div className='border py-8 rounded-xl shadow-xl' >
                    <p className='text-6xl font-bold text-[#142b3d]'>100</p>
                    <p className='text-gray-400 mt-2'>Projects</p>
                </div>
            </div>
        </div>

    </div>
  )
}

export default Services