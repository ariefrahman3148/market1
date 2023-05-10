"use client"
import React, { useState } from 'react';

export default function Card(props) {

  return (
    <div className="max-w-sm h-[50vh] m-auto py-0 px-0 rounded  relative group text-white ">
      <div
        style={{ backgroundImage: `url(${props?.image})` }}
        className='w-full h-full bg-center bg-cover grid justify-items-center content-center transition-all delay-500 ease-out'
      >
      <div className='transition-all scale-100 group-hover:scale-0  duration-900 ease-in-out text-white text-6xl font-extrabold absolute top-[50%] -translate-x-0 translate-y-[-50%]'>{props?.title}</div>
      <div className='transition-all scale-0 group-hover:scale-100  duration-900 ease-in-out h-100 px-10'>
          <p className="text-base">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptatibus quia, nulla! Maiores et perferendis eaque, exercitationem praesentium nihil.
          </p>
      </div>
    </div>
      
      
    </div>
  );
}