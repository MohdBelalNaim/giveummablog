import React, { useEffect } from "react";
import { Link } from "react-router-dom";

const BlogCard = ({ index }) => {
  useEffect(() => {
    window.scrollTo(0, 0);
  });
  return (
    <Link to="/details">
      <div className="relative">
        <div className="absolute text-xs bg-gray-400 text-white rounded-full px-3 py-1 top-2 left-2">
          Education
        </div>
        <img
          src={`https://picsum.photos/600?${index}`}
          className="w-full h-[260px] max-sm:h-[180px] object-cover rounded-md"
          alt=""
        />
      </div>

      <div className="text-gray-500 mt-2 mb-3 max-sm:text-xs max-sm:mb-1">
        30 Jan 2024 • 8 mins read
      </div>
      <div className="text-lg font-bold mb-1 max-sm:text-[14px]">
        Unveiling the secrets behind the tourist trails
      </div>
      <div className="text-gray-500 mb-3 max-sm:text-xs">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Ex iste totam
        illo ducimus nulla...
      </div>
      <div className="flex items-center gap-3  max-sm:gap-2">
        <img
          src={`https://picsum.photos/400?${index}`}
          className="size-8 max-sm:size-5 object-cover rounded-full"
          alt=""
        />
        <div className="max-sm:text-xs">Mohd Belal Naim</div>
      </div>
    </Link>
  );
};

export default BlogCard;
