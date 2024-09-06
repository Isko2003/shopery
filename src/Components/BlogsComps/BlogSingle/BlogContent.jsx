import React from 'react'

const BlogContent = ({content}) => {
  return (
      <div>
          <p className='text-gray-500'>
              {content[1]}
          </p>
          <br />
        
          <p className='text-gray-500'>
              {content[2]}
          </p>
          <div className='grid grid-cols-1 sm:grid-cols-2 gap-3 my-5'>
              <img src={content["img1"]} alt="" className='rounded-lg' />
              <img src={content["img1"]} alt="" className='rounded-lg' />
          </div>
          <p className='text-gray-500'>
              {content[3]}
          </p>
    </div>
  )
}

export default BlogContent