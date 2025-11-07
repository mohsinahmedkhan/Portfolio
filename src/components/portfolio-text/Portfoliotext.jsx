import React from "react";
import AOS from 'aos';
import 'aos/dist/aos.css';
import { useEffect } from 'react';

const Portfoliotext = () => {
  useEffect(() => {
  AOS.init({
    duration: 1000, // 1 second animation
    once: true      // animate only once
  });
}, []);
  return (
    <div>
<section className="min-h-[60vh] md:min-h-[40vh] lg:min-h-[80vh]  flex items-center justify-center bg-[#060606] px-6 py-10 md:py-0 pb-30 ">
      <div data-aos="zoom-in" className="max-w-7xl text-center space-y-1 md:space-y-4 text-white font-semibold leading-tight font-[Rajdhani]">
        <p className="text-3xl md:text-5xl text-gray-400  lg:text-5xl ">
          A personal <span className="text-yellow-600">portfolio</span> is a collection of your  work, showcasing 
        </p>
        <p className="text-3xl md:text-4xl text-gray-400 lg:text-5xl ">
          your growth, experience, and the journey as a 
        </p>
        <p className="text-3xl md:text-4xl">
          <span className="text-yellow-600"> frontend developer</span>
        </p>
        <p className="text-3xl md:text-4xl text-gray-400 lg:text-5xl">
          It highlights your  <span className="text-yellow-500">achievements,</span>technical skills, and 
        </p>
        <p className="text-3xl md:text-4xl font-bold lg:text-5xl">
          passion for <span className="text-yellow-500">web design</span> and development 
        </p>
      </div>
    </section>
  
    </div>
  );
};

export default Portfoliotext;
