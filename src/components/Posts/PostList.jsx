import React from 'react';
import PostItem from './PostItem';

export default function PostList({ posts }) {
  return (
    <div className="flex justify-center" style={{ backgroundColor: 'var(--bg-color)' }}>
      <div
        className="relative border-x-2 px-3 pb-4"
        style={{
          borderColor: 'var(--border-color)',
          color: 'var(--text-color)',
        }}
      >
        {posts.map((post) => (
          <PostItem key={post.id} post={post} />
        ))}
        
      </div>
      
    </div>
  );
}
