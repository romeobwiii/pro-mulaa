import React from 'react';
import { Calendar, User, Tag } from 'lucide-react';
import { Link } from 'react-router-dom';

const BlogCard = ({ post }) => {
  return (
    <div className="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-shadow">
      <div className="h-48 bg-gradient-to-br from-primary to-primary-dark flex items-center justify-center">
        <span className="text-4xl font-bold text-secondary opacity-50">{post.category}</span>
      </div>
      
      <div className="p-6">
        <div className="flex items-center gap-4 text-sm text-gray-500 mb-3">
          <span className="flex items-center gap-1">
            <Calendar className="h-4 w-4" />
            {new Date(post.date).toLocaleDateString('en-US', { month: 'short', day: 'numeric', year: 'numeric' })}
          </span>
          <span className="flex items-center gap-1">
            <User className="h-4 w-4" />
            {post.author}
          </span>
          <span className="flex items-center gap-1">
            <Tag className="h-4 w-4" />
            {post.category}
          </span>
        </div>
        
        <h2 className="text-xl font-bold text-primary mb-2">{post.title}</h2>
        <p className="text-gray-600 mb-4">{post.excerpt}</p>
        
        <Link 
          to={`/blog/${post.id}`}
          className="text-secondary font-semibold inline-flex items-center gap-1 hover:gap-2 transition-all"
        >
          Read More
          <ChevronRight className="h-4 w-4" />
        </Link>
      </div>
    </div>
  );
};

export default BlogCard;