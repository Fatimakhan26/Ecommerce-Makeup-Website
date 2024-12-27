import React from 'react'
import { Whisper } from 'next/font/google';
import CategoryCard from './CategoryCard';
const whisper = Whisper ({ subsets: ["latin"], weight: ["400"] });

const data = [
    {
        img:"/Category 1.jpg",
        type:"Makeup",
        quantity: "(4 Items)",
    },

    {
        img:"/Category 2.jpg",
        type:"Nail and Wax",
        quantity: "(8 Items)",
    },

    {
        img:"/Category 3.jpg",
        type:"Skincare",
        quantity: "(6 Items)",
    },
];

const Category = () => {
  return (
    <div className='bg-black bg-no-repeat py-16 mt-32'>
        <div className="container text-center text-white">
        <h3 className={`${whisper.className} text-[40px]`}>Favourite category</h3>
        <h2 className='text-[40px] font-medium'>Top Category</h2>
        <div className="flex gap-4 justify-center md:gap-16 pt-8">
        {data.map((item) => (
            <CategoryCard
            key={item.type}
            img={item.img}
            type={item.type}
            quantity={item.quantity}
            />
        ))}
        </div>
        </div>
      
    </div>
  )
}

export default Category
