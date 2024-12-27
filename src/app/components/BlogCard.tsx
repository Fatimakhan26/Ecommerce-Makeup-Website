import React from 'react'

interface propsType {
    img: string;
    title: string;
    comment: string;
    date: string;

}

const BlogCard = ({img, title, comment, date}:propsType) => {
  return (
    <div className='space-y-4'>
      <img 
      className='rounded-lg hover:scale-105 transition-transform'
      src={img}
      alt='post'
      />
      <div className='text-accent font-medium'>
        <span>{date} / </span>
        <span>{comment} Comments</span>
      </div>
      <h3 className='font-bold text-xl'>{title}</h3>
    </div>
  )
}

export default BlogCard
