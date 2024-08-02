import React from "react";

function Blogs() {
  const blogs = [
    {
      name: "TRAVEL",
      src: "./card/Rectangle11.png",
    },
    {
      name: "NUTRITION",
      src: "./card/Rectangle12.png",
    },
    {
      name: "SENIOR DOG CARE",
      src: "./card/Rectangle13.png",
    },
    {
      name: "BEHAVIOUR",
      src: "./card/Rectangle14.png",
    },
  ];
  return (
    <div className="blogComp flex flex-col items-center">
      <h3 className="text-center my-8 font-oswald font-semibold text-4xl text-[#424236]">
        INTRESTING BLOGS
      </h3>
      <div className="blogs flex justify-center sm:justify-between md:justify-evenly lg:justify-between w-[90%] flex-wrap">
        {blogs.map((blog) => (
          <div
            key={blog.name}
            className="blog mt-2 xl:mt-0 lg:w-1/5 sm:w-1/4 mx-2 w-1/3 "
          >
            <img src={blog.src} alt="" />
            <p className="bg-yellow-500 text-center font-oswald font-semibold  text-lg sm:text-2xl text-[#000000] w-full">
              {blog.name}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Blogs;
