import Image from 'next/image'
import React from 'react'

const Hero = () => {
  return (
    <div className='container relative pt-16'>
      <Image className='w-[100%] h-auto' src={require("../../../public/Hero.jpg")} 
      alt='Hero Image'
       width={1500}
        height={900}/>

        <div className='hidden sm:block absolute top-[80%] left-[50%] translate-x-[-50%] translate-y-[-50%] bg-white
        w-[250px] h-[200px] space-y-3 lg:w-[300px] lg:h-[270px] lg:space-y-6 xl:w-[400px] xl:h-[300px] p-6 xl:space-y-8'>
            <h2 className='text-[22px] lg:text-[30px] xl:text-[40px] leading-tight'>
                Trendy Makeup for girls
                </h2>

                <p className='text-gray-600 text-[14px] xl:text-[16px]'>Follow the latest makeup trends and get inspired to transform your look in an instant with all new everything,
                   from lipstick trends to eye makeup trends</p>
                <button className='bg-[#333] uppercase text-white text-[12px] lg:text-[16px] py-2
                xl:py-4 px-8 rounded-md hover:bg-accent'>Shop now</button>
        </div>
    </div>
  )
}

export default Hero

