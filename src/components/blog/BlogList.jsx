import React from 'react';
import BlogCard from './BlogCard';
import { blogPosts } from '../../data/blogData';

const BlogList = () => {
  return (
    <section className="py-20 bg-cream">
      <div className="container-custom">
        <div className="text-center mb-12">
          <h1 className="section-title">Blog & Insights</h1>
          <p className="section-subtitle mx-auto">
            Thoughts on emotional AI, cultural technology, and building systems with soul
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {blogPosts.map((post) => (
            <BlogCard key={post.id} post={post} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default BlogList;