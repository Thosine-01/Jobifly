import React from 'react'
import { samplePosts } from '../assets/assets'
import Blog_Card from './Blog_Card'

const Blog = () => {
  return (
    <div className='container'>
        <div className='flex flex-col md:flex-row md:items-center md:justify-between mb-8 px-4 lg:px-0 mt-20 '>
            <div>
                <h2 className='text-3xl font-bold text-gray-900'>Our Blog</h2>
                <p className='mt-1 text-gray-500'>Stay tuned to our latest news and articles</p>
            </div>
            <div className='px-5 py-3 border-2 border-amber-600 rounded-2xl text-sm'>View More</div>
        </div>


        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">  
          {samplePosts.map((post) => (  
            <Blog_Card key={post.id} post={post} />  
          ))}  
        </div>  
    </div>
  )
}

export default Blog