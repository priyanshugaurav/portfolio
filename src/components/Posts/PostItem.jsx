import React from 'react';
import QuotedPost from './QuotedPost';

export default function PostItem({ post }) {
  return (
    <div
      className="relative flex items-start gap-3 py-6 border-b"
      style={{ borderColor: 'var(--border-color)', color: 'var(--text-color)' }}
    >
      {/* Avatar */}
      <div className="relative z-10">
        <img
          src={post.user.avatar}
          alt="avatar"
          className="w-11 h-11 rounded-full border"
          style={{ borderColor: 'var(--border-color)' }}
        />
      </div>

      {/* Post Body */}
      <div className="flex-1">
        {/* Header */}
        <div className="flex flex-wrap items-center gap-2">
          <span
            className="font-semibold"
            style={{ color: 'var(--text-color)' }}
          >
            {post.user.name}
          </span>
          <span
            className="opacity-70"
            style={{ color: 'var(--text-color)' }}
          >
            {post.user.handle}
          </span>
          <span
            className="opacity-50"
            style={{ color: 'var(--text-color)' }}
          >
            · {post.date}
          </span>
        </div>
        <div
          className="text-sm opacity-70"
          style={{ color: 'var(--text-color)' }}
        >
          {post.user.tag}
        </div>

        {/* Content */}
        <div
          className="mt-2 whitespace-pre-line text-[15px] leading-relaxed"
          style={{ color: 'var(--text-color)' }}
        >
          {post.content}
        </div>

        {/* Image */}
        {post.image && (
          <div className="mt-3">
            <img
              src={post.image}
              alt="post"
              className="rounded-lg border max-h-96 object-cover"
              style={{ borderColor: 'var(--border-color)' }}
            />
          </div>
        )}

        {/* Quoted Post */}
        {post.quoted && <QuotedPost quoted={post.quoted} />}
      </div>
    </div>
  );
}
