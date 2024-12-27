import React from 'react'
import FeatureCart from './FeatureCart'

const data =[
    {
        img: "/naturally.jpg",
        title: "Naturally Derived",
        description: "Natural and oraganic makeup products",
    },

    {
        img: "/free.png",
        title: "Free Shipping",
        description: "Free shipping all over the world",
    },

    {
        img: "/secure.webp",
        title: "Secure payment",
        description: "Fully protected when paying onlinw",
    },
]


const Feature = () => {
  return (
    <div className='container pt-16'>
        <div className='grid md:grid-cols-2 gap-y-8 lg:gap-y-4 lg:grid-cols-3 gap-4'>
        {data.map(item => <FeatureCart 
        key={item.title} 
        img={item.img} 
        title= {item.title} 
        description={item.description}
        />)}
        </div>
      
    </div>
  )
}

export default Feature
