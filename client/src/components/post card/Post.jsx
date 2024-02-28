import React from "react";

const Post = () => {
  return (
    <section className="my-4 bg-white mx-3 sm:mx-6 flex max-sm:flex-col gap-3 p-3">
      <div className="h-[200px] w-full sm:w-[600px] ">
        <img
          src="https://img.freepik.com/free-photo/painting-mountain-lake-with-mountain-background_188544-9126.jpg"
          alt="image"
          className="h-full w-full object-cover"
        />
      </div>
      <div className="flex flex-col justify-around">
        <h1 className="text-3xl font-[600] text-center sm:text-left">
          Blog Title
        </h1>
        <h3 className="text-lg font-semibold">
          Owner <span className="font-light">| Date</span>
        </h3>
        <p className="hidden sm:block text-md">
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quo
          quibusdam repellat, dolore obcaecati provident repellendus tempora
          doloribus, quasi consectetur deserunt optio neque? Sunt delectus
          eveniet ab autem natus quia iure.
        </p>
      </div>
    </section>
  );
};

export default Post;
