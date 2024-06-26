import React from "react";
import BlogCard from "../components/BlogCard";
import { FaSearch } from "react-icons/fa";

const Home = () => {
  return (
    <div>
      <div className="absolute top-0 text-white px-12 py-10 flex justify-between items-center w-full max-sm:p-2">
        <div className="font-bold text-xl max-sm:text-lg">GiveUmma Blogs</div>
        <div className="glass py-2 rounded-md px-3 flex items-center ">
          <input
            type="text"
            placeholder="Search blogs"
            className="max-sm:hidden bg-transparent outline-none placeholder:text-white"
          />
          <FaSearch />
        </div>
      </div>
      <div
        className="h-[500px] max-sm:h-[340px] bg-cover mb-6 flex items-end w-full justify-start "
        style={{
          backgroundImage:
            "linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)),url('https://picsum.photos/2800')",
        }}
      >
        <div className="container mx-auto lg:px-12 w-full py-12 flex justify-between items-center max-sm:flex-col max-sm:px-5">
          <div>
            <div className="text-white bg-gray-400 w-max px-3 py-1 text-xs rounded-full mb-4">
              Adventure
            </div>
            <div className="text-2xl text-white max-sm:text-xl">
              Exploring the wonders of hiking
            </div>
            <div className="w-[50%] max-sm:w-[100%] text-white text-sm mt-3">
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Praesentium neque natus ea laboriosam distinctio
            </div>
          </div>
          <div className="max-sm:hidden">
            <div className="flex items-center gap-3 text-white">
              <img
                src="https://picsum.photos/400"
                className="size-8 rounded-full"
                alt=""
              />
              Mohd Belal Naim
            </div>
            <div className="text-white text-sm mt-3">
              24 January 2024 • 10 min read
            </div>
          </div>
        </div>
      </div>
      <div className="max-sm:px-4 container mx-auto grid grid-cols-3 lg:px-12 gap-10 max-sm:grid-cols-1">
        {"abcdefg".split("").map((item, index) => {
          return <BlogCard index={index} />;
        })}
      </div>

      <div className="bg-black py-16 mt-8">
        <div className="max-sm:grid-cols-1 grid grid-cols-3 container mx-auto">
          <div className="text-white lg:px-12">
            <div className="text-xl font-bold max-sm:text-center">
              GiveUmmah
            </div>
            <div className="text-sm mt-2  max-sm:text-center">
              Lorem ipsum dolor sit, amet consectetur adipisicing elit.
              Consequatur corporis libero officia culpa quidem, velit vel. Sit
              tempora porro, minus cum voluptates reprehenderit labore in
              molestias doloremque! Voluptates, maiores ut.
            </div>
          </div>
          <div className="text-white grid gap-y-4 text-center max-sm:mt-4 max-sm:gap-y-2">
            <div className="font-bold">About</div>
            <div>About us</div>
            <div>Blog</div>
            <div>Career</div>
          </div>
          <div className="text-white grid gap-y-4 text-center max-sm:mt-4 max-sm:gap-y-2">
            <div className="font-bold">Support</div>
            <div>Support us</div>
            <div>Contact</div>
            <div>FAQ</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
