import React from "react";
import { FaSearch } from "react-icons/fa";
import BlogCard from "../components/BlogCard";

const Details = () => {
  return (
    <>
      <div className=" text-black max-sm:px-4 px-12 py-4 border-b flex justify-between items-center w-full">
        <div className="font-bold text-xl max-sm:text-lg">GiveUmma Blogs</div>
        <div className="py-2 rounded-md px-3 flex items-center border">
          <input
            type="text"
            placeholder="Search blogs"
            className="bg-transparent outline-none max-sm:hidden"
          />
          <FaSearch />
        </div>
      </div>
      <div className="w-[min(1200px,96%)] mx-auto">
        <div className="text-2xl font-bold py-4 max-sm:text-lg">
          How to get organized for this Ramadan
        </div>
        <img
          src="https://picsum.photos/1600"
          className="h-[500px] w-full object-cover max-sm:h-[300px]"
          alt=""
        />
        <div className="flex items-center gap-5 py-4 text-gray-500 font-bold max-sm:text-xs">
          <div>By Mohd Belal Naim</div>
          <div>3 March 2024</div>
          <div>10 min read</div>
        </div>
        <div className="mb-4 max-sm:text-sm">
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Dolorum,
          vitae. Mollitia earum et porro distinctio minus non eius a vel
          laudantium accusamus dolor, atque culpa aut! Odit debitis magni earum?
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Dolorum,
          vitae. Mollitia earum et porro distinctio minus non eius a vel
          laudantium accusamus dolor, atque culpa aut! Odit debitis magni earum?
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Dolorum,
          vitae. Mollitia earum et porro distinctio minus non eius a vel
          laudantium accusamus dolor, atque culpa aut! Odit debitis magni earum?
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Dolorum,
          vitae. Mollitia earum et porro distinctio minus non eius a vel
          laudantium accusamus dolor, atque culpa aut! Odit debitis magni earum?
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Dolorum,
          vitae. Mollitia earum et porro distinctio minus non eius a vel
          laudantium accusamus dolor, atque culpa aut! Odit debitis magni earum?
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Dolorum,
          vitae. Mollitia earum et porro distinctio minus non eius a vel
          laudantium accusamus dolor, atque culpa aut! Odit debitis magni earum?
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Dolorum,
          vitae. Mollitia earum et porro distinctio minus non eius a vel
          laudantium accusamus dolor, atque culpa aut! Odit debitis magni earum?
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Dolorum,
          vitae. Mollitia earum et porro distinctio minus non eius a vel
          laudantium accusamus dolor, atque culpa aut! Odit debitis magni earum?{" "}
          <br /> <br />
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Dolorum,
          vitae. Mollitia earum et porro distinctio minus non eius a vel
          laudantium accusamus dolor, atque culpa aut! Odit debitis magni earum?
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Dolorum,
          vitae. Mollitia earum et porro distinctio minus non eius a vel
          laudantium accusamus dolor, atque culpa aut! Odit debitis magni earum?
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Dolorum,
          vitae. Mollitia earum et porro distinctio minus non eius a vel
          laudantium accusamus dolor, atque culpa aut! Odit debitis magni earum?
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Dolorum,
          vitae. Mollitia earum et porro distinctio minus non eius a vel
          laudantium accusamus dolor, atque culpa aut! Odit debitis magni earum?
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Dolorum,
          vitae. Mollitia earum et porro distinctio minus non eius a vel
          laudantium accusamus dolor, atque culpa aut! Odit debitis magni earum?
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Dolorum,
          vitae. Mollitia earum et porro distinctio minus non eius a vel
          laudantium accusamus dolor, atque culpa aut! Odit debitis magni earum?
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Dolorum,
          vitae. Mollitia earum et porro distinctio minus non eius a vel
          laudantium accusamus dolor, atque culpa aut! Odit debitis magni earum?
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Dolorum,
          vitae. Mollitia earum et porro distinctio minus non eius a vel
          laudantium accusamus dolor, atque culpa aut! Odit debitis magni earum?{" "}
          <br />
        </div>
        <div className="text-lg font-bold mb-4">Similiar campaigns</div>
        <div className="grid grid-cols-3 gap-5 max-sm:grid-cols-1">
          {"abcdef".split("").map((item, index) => {
            return <BlogCard index={index} />;
          })}
        </div>
      </div>
    </>
  );
};

export default Details;
