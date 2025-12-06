import React from 'react'
import { Bookmark } from "lucide-react"; 

const Blog_Card = ({post}) => {
  return (
    <div className="bg-white rounded-lg shadow-sm overflow-hidden hover:shadow-md transition-shadow duration-200 border">  
      <img  
        src={post.imageUrl}  
        alt={post.title}  
        className="w-full h-48 object-cover"  
      />  
      <div className="p-4 flex flex-col justify-between h-full">  
        <div>  
          <div className="flex justify-between items-center text-sm text-gray-500">  
            <span>{post.author}</span>  
            <span>{post.date}</span>  
          </div>  
          <h3 className="mt-2 text-lg font-semibold text-gray-900">  
            {post.title}  
          </h3>  
        </div>  
        <div className="mt-4 flex bg-black items-center justify-between">  
          <button className="px-4 py-2 border border-gray-300 rounded-full text-sm text-gray-700 hover:bg-gray-100 transition">  
            Keep reading  
          </button>  
          <Bookmark className="w-5 h-5 text-gray-400 hover:text-gray-600" />  
        </div>  
      </div>  
    </div>  
  )
}

export default Blog_Card