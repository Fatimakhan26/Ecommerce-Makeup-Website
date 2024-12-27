import React from 'react'
import BlogCard from '../components/BlogCard';

const data = [
    {
        img: "/blog1.jpg",
        title:"Benefits of Face Mask",
        date: "Dec 19, 2024",
        comment: "8",
    },

    {
        img: "/blog2.jpg",
        title:"Get your smooth and soft skin by using Hot Wax",
        date: "Dec 20, 2024",
        comment: "4",
    },


    {
        img: "/blog3.webp",
        title:"Face Serums are essential for skin",
        date: "Dec 21,2024",
        comment: "6",
    },
];

const Blog = () => {
  return (
    <div className='container pt-32'>
        <h2 className='font-bold text-2xl'>Latest News</h2>
        <p className='text-gray-500'>
            Present post is a best way to highlight interesting moments of your blog
        </p>


        <div className='grid sm:grid-cols-2 md:grid-cols-3 gap-8 pt-8'>
        {data.map(item => 
        <BlogCard 
        key={item.date} 
        img={item.img} 
        title={item.title} 
        date={item.date} 
        comment={item.comment}/>)}
        </div>
      
    </div>
  )
}

export default Blog
