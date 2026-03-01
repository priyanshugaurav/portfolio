import React from 'react';

export default function QuotedPost({ quoted }) {
  return (
    <div 
      className="mt-4 p-4 border-2 rounded-xl transition-colors duration-300 hover:opacity-90 cursor-pointer"
      style={{
        borderColor: 'var(--border-color)',
        backgroundColor: 'var(--bg-color)' // Inherits the main background instead of a random gray
      }}
    >
      <div className="flex items-center gap-2 mb-1">
        <span className="font-bold text-sm">{quoted.user}</span>
        <span className="text-sm opacity-60">{quoted.handle}</span>
        <span className="text-sm opacity-40">·</span>
        <span className="text-sm opacity-60">{quoted.date}</span>
      </div>
      
      {quoted.tag && (
        <div className="text-xs font-semibold opacity-50 uppercase tracking-wider mb-2">
          {quoted.tag}
        </div>
      )}
      
      <div className="whitespace-pre-line text-[14.5px] leading-relaxed opacity-90">
        {quoted.content}
      </div>
    </div>
  );
}