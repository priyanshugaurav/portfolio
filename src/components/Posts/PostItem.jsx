import React from 'react';
import QuotedPost from './QuotedPost';

export default function PostItem({ post }) {
  return (
    <div
      className="relative flex items-start gap-4 p-4 sm:p-6 border-b-2 transition-colors duration-300 cursor-default"
      style={{ 
        borderColor: 'var(--border-color)', 
        color: 'var(--text-color)' 
      }}
      onMouseEnter={(e) => e.currentTarget.style.backgroundColor = 'var(--cover-bg)'}
      onMouseLeave={(e) => e.currentTarget.style.backgroundColor = 'transparent'}
    >
      {/* Avatar */}
      <div className="relative z-10 shrink-0 mt-1">
        <img
          src={post.user.avatar}
          alt={`${post.user.name} avatar`}
          className="w-12 h-12 rounded-full border-2 object-cover shadow-sm transition-transform duration-300"
          style={{ borderColor: 'var(--border-color)' }}
        />
      </div>

      {/* Post Body */}
      <div className="flex-1 min-w-0">
        {/* Header */}
        <div className="flex flex-wrap items-baseline gap-x-2 gap-y-1">
          <span className="font-bold text-base tracking-tight hover:underline cursor-pointer">
            {post.user.name}
          </span>
          <span className="text-sm opacity-60 font-medium">
            {post.user.handle}
          </span>
          <span className="text-sm opacity-40">·</span>
          <span className="text-sm opacity-60 hover:underline cursor-pointer">
            {post.date}
          </span>
        </div>
        
        {/* Optional Tag/Label */}
        {post.user.tag && (
          <div className="text-xs font-semibold opacity-50 uppercase tracking-wider mt-0.5">
            {post.user.tag}
          </div>
        )}

        {/* Content */}
        <div className="mt-2 whitespace-pre-line text-[15px] sm:text-base leading-relaxed break-words">
          {post.content}
        </div>

        {/* Image */}
        {post.image && (
          <div className="mt-4 overflow-hidden rounded-xl border-2 transition-colors duration-300"
               style={{ borderColor: 'var(--border-color)' }}>
            <img
              src={post.image}
              alt="Post attachment"
              className="w-full max-h-[400px] object-cover hover:opacity-95 transition-opacity duration-300"
            />
          </div>
        )}

        {/* Quoted Post */}
        {post.quoted && <QuotedPost quoted={post.quoted} />}
      </div>
    </div>
  );
}