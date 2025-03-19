'use client';
import { useState } from 'react';
import { FaHeart, FaRegHeart, FaComment, FaShare, FaMusic } from 'react-icons/fa';

export default function VideoCard({ post }) {
  const [liked, setLiked] = useState(false);

  // Placeholder data
  const { username, caption, audio, likes, comments, shares } = post;

  const handleLikeClick = () => {
    setLiked(!liked);
  };

  return (
    <div className="flex py-6 border-b relative">
      {/* User avatar */}
      <div className="mr-3">
        <div className="h-12 w-12 rounded-full bg-gray-300"></div>
      </div>

      {/* Left section (user info, caption, video) */}
      <div className="flex-1">
        {/* User info and caption */}
        <div className="mb-2">
          <span className="font-bold hover:underline cursor-pointer">{username}</span>
          <span className="text-sm ml-1">2d ago</span>
          <p className="text-sm mt-1">{caption}</p>
        </div>

        {/* Audio info */}
        <div className="flex items-center text-sm mb-3">
          <FaMusic className="mr-2 text-xs" />
          <span className="truncate max-w-[250px]">{audio}</span>
        </div>

        {/* Video container */}
        <div className="w-[300px] h-[530px] bg-black rounded-md flex items-center justify-center relative overflow-hidden">
          <p className="text-white">Video Placeholder</p>
          <div className="absolute bottom-4 left-4 text-white text-sm">
            <p className="mb-1">0:30</p>
          </div>
        </div>
      </div>

      {/* Right section (buttons) */}
      <div className="absolute right-0 top-1/2 -translate-y-0 flex flex-col items-center space-y-3 px-30 py-15">
        {/* Like button */}
        <button className="flex flex-col items-center" onClick={handleLikeClick}>
          <div className="h-10 w-10 rounded-full bg-gray-200 flex items-center justify-center">
            {liked ? <FaHeart className="text-red-500" /> : <FaRegHeart />}
          </div>
          <span className="text-xs mt-1">{liked ? likes + 1 : likes}</span>
        </button>

        {/* Comment button */}
        <button className="flex flex-col items-center">
          <div className="h-10 w-10 rounded-full bg-gray-200 flex items-center justify-center">
            <FaComment />
          </div>
          <span className="text-xs mt-1">{comments}</span>
        </button>

        {/* Share button */}
        <button className="flex flex-col items-center">
          <div className="h-10 w-10 rounded-full bg-gray-200 flex items-center justify-center">
            <FaShare />
          </div>
          <span className="text-xs mt-1">{shares}</span>
        </button>
      </div>
    </div>
  );
}
