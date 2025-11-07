import React, { useEffect } from 'react'
import Portfolio from '../../assets/portfolio.PNG';
import Portfolio2 from '../../assets/portfolio2.PNG';
import Portfolio3 from '../../assets/portfolio3.PNG';
import AOS from 'aos';
import 'aos/dist/aos.css';
const Services = () => {
  useEffect(() => {
    AOS.init({ duration: 1000 });
  }, []);
  return (
    <div>
      <section className="bg-black py-12 px-4 hidden lg:block">
        <div className="headings flex flex-col text-center justify-center">

          <h3 data-aos="zoom-in" className='uppercase text-yellow-500 text-2xl Name'>Latest Portfolio</h3>
          <h1 data-aos="fade-up" className='text-5xl font-bold text-white'>Transforming Ideas into Exceptional</h1>
          <p data-aos="fade-up" className='text-lg text-gray-400 max-w-3xl text-center flex justify-center mx-auto mt-3 mb-7'>Business consulting consultants provide expert advice and guida businesses to help them improve their performance, efficiency, and organizational</p>
        </div>
        <div className="max-w-6xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">

          {/* Box 1 */}
          <div data-aos="zoom-in" className="relative overflow-hidden group rounded-md shadow-md cursor-pointer ">
            <img
              src={Portfolio}
              alt="Service"
              className=" border-y-2 w-full h-full object-contain transition-transform duration-500 group-hover:scale-110"
              style={{ borderColor: "#FDC448" }}
            />

            {/* Light overlay on hover */}
            <div className="absolute inset-0 bg-black/20 group-hover:bg-black/40 transition-colors duration-500"></div>

            {/* Slide-up text */}
            <div className="absolute inset-0 flex flex-col items-center justify-center text-white text-center
        opacity-0 translate-y-10 group-hover:opacity-100 group-hover:translate-y-0 
        transition-all duration-500 ease-in-out font-[Rajdhani]">
              <h2 className="text-2xl font-bold text-[#FDC448]">Apple Clone</h2>
              <p className="text-sm mt-2 px-4 font-semibold">Created a sleek and responsive landing page for an Apple website using HTML CSS and JavaScript.
                Designed with bold typography, and clean section layouts to enhance brand appeal.</p>
            </div>
          </div>

          {/* Box 2 */}
          <div data-aos="zoom-in" className="relative overflow-hidden group rounded-md shadow-md cursor-pointer text-[Rajdhani]">
            <img
              src={Portfolio2}
              alt="Service"
              className="border-y-2 w-full h-full object-contain transition-transform duration-500 group-hover:scale-110"
              style={{ borderColor: "#FDC448" }}
            />
            <div className="absolute inset-0 bg-black/20 group-hover:bg-black/40 transition-colors duration-500"></div>
            <div className="absolute inset-0 flex flex-col items-center justify-center text-white text-center
        opacity-0 translate-y-10 group-hover:opacity-100 group-hover:translate-y-0 
        transition-all duration-500 ease-in-out font-[Rajdhani] " >
              <h2 className="text-2xl font-bold text-[#FDC448]">SMIT Chatbot</h2>
              <p className="text-sm mt-2 px-4 font-semibold">Built a fully responsive Chatbot using js with clean UI and smooth to enhance user interaction and experience.
              </p>
            </div>
          </div>

          {/* Box 3 */}
          <div data-aos="zoom-in" className="relative overflow-hidden group rounded-md shadow-md cursor-pointer">
            <img
              src={Portfolio3}
              alt="Service"
              className=" border-y-2 w-full h-full object-contain transition-transform duration-500 group-hover:scale-110"
              style={{ borderColor: "#FDC448" }}
            />
            <div className="absolute inset-0 bg-black/20 group-hover:bg-black/40 transition-colors duration-500"></div>
            <div className="absolute inset-0 flex flex-col items-center justify-center text-white text-center
        opacity-0 translate-y-10 group-hover:opacity-100 group-hover:translate-y-0 
        transition-all duration-500 ease-in-out font-[Rajdhani]">
              <h2 className="text-2xl font-bold text-[#FDC448]">Real E-State website</h2>
              <p className="text-sm mt-2 px-4 font-semibold">This is a real estate landing page made using HTML, CSS, and JavaScript
                Explore details in a simple and interactive way.</p>
            </div>
          </div>

        </div>
      </section>

    </div>
  )
}

export default Services