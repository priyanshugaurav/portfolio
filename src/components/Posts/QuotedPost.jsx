import React from 'react';

export default function QuotedPost({ quoted }) {
  return (
    <div className="mt-4 p-4 border rounded-sm border-[#ebebeb] dark:border-gray-700 bg-gray-50 dark:bg-gray-800">
      <div className="text-sm text-gray-500 dark:text-gray-400">{quoted.tag}</div>
      <div className="font-semibold text-gray-800 dark:text-gray-200">{quoted.user}</div>
      <div className="text-sm text-gray-400 dark:text-gray-500">
        {quoted.handle} · {quoted.date}
      </div>
      <div className="mt-2 whitespace-pre-line text-gray-700 dark:text-gray-300 text-[14.5px]">
        {quoted.content}
      </div>
    </div>
  );
}
