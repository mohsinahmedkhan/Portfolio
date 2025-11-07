import React from "react";
import PortfolioImg from "../../assets/portfolio.PNG";
import PortfolioImg2 from "../../assets/portfolio2.PNG";
import PortfolioImg3 from "../../assets/portfolio3.PNG";

const Portfolio2 = () => {
  return (
    <div>
      <section className=" bg-black py-10">
        <div className="headings flex flex-col text-center justify-center font-[Rajdhani]">

          <h3 data-aos="zoom-in" className='uppercase text-yellow-500 text-2xl '>Latest Portfolio</h3>
          <h1 data-aos="fade-up" className='text-5xl font-bold text-white'>Transforming Ideas into Exceptional</h1>
          <p data-aos="fade-up" className='text-lg text-gray-400 max-w-3xl text-center flex justify-center mx-auto mt-3 mb-7'>Business consulting consultants provide expert advice and guida businesses to help them improve their performance, efficiency, and organizational</p>
        </div>
        <div className="portfolio-container flex flex-col md:flex-row gap-10 md:px-30 px-10 justify-center items-center">
          <div
            className="portfolio-box1 w-[300px] h-[310px] text-white  bg-[#141414] border-b-2 border-t-2 rounded-2xl"
            style={{ borderColor: "#FDC448" }}
          >
            <div className="">
              <img src={Portfolio} alt="" />
            </div>
            <div className="content px-4 py-3 space-y-4">
              <h2 className="font-bold text-2xl">Apple Clone</h2>
              <div className="langauage space-x-1.5">
                <span className="border-2 px-3 font-semibold  bg-[#fdc4482c] rounded-xl" style={{ borderColor: "#FDC448" }}>HTML</span>
                <span className="border-2 px-3 font-semibold  bg-[#fdc4482c] rounded-xl" style={{ borderColor: "#FDC448" }}>Css</span>
                <span className="border-2 px-3 font-semibold  bg-[#fdc4482c] rounded-xl" style={{ borderColor: "#FDC448" }}>JS</span>
              </div>
              <a href="https://apple-clone-ten.vercel.app/" target="_blank">

                <button
                  data-aos="zoom-in"
                  type="submit"
                  value="Send"
                  className="bg-yellow-500 border-2 border-yellow-500 
                hover:bg-transparent hover:text-yellow-500 
                text-white px-6  font-semibold rounded-full 
                transition duration-300 cursor-pointer"
                >
                  Preview
                </button>
              </a>
            </div>
          </div>
          <div
            className="portfolio-box2 w-[300px] h-[310px] text-white  bg-[#141414] border-b-2 border-t-2 rounded-2xl overflow-hidden"
            style={{ borderColor: "#FDC448" }}
          >
            <div className="">
              <img src={Portfolioimg2} alt="" />
            </div>
            <div className="content px-4 py-3 space-y-4">
              <h2 className="font-bold text-2xl">SMIT Chat-Bot</h2>
              <div className="langauage space-x-1.5">
                <span className="border-2 px-3 font-semibold  bg-[#fdc4482c] rounded-xl" style={{ borderColor: "#FDC448" }}>React js</span>
                <span className="border-2 px-3 font-semibold  bg-[#fdc4482c] rounded-xl" style={{ borderColor: "#FDC448" }}>CSS</span>
                <span className="border-2 px-3 font-semibold  bg-[#fdc4482c] rounded-xl" style={{ borderColor: "#FDC448" }}>Context Api</span>
              </div>
              <a href="https://smit-chatbot-by-mohsin-ahmed.surge.sh/" target="_blank">
                <button
                  data-aos="zoom-in"
                  type="submit"
                  value="Send"
                  className="bg-yellow-500 border-2 border-yellow-500 
                hover:bg-transparent hover:text-yellow-500 
                text-white px-6  font-semibold rounded-full 
                transition duration-300 cursor-pointer"
                >
                  Preview
                </button>
              </a>
            </div>
          </div>
          <div
            className="portfolio-box3 w-[300px] h-[310px] text-white  bg-[#141414] border-b-2 border-t-2 rounded-2xl"
            style={{ borderColor: "#FDC448" }}
          >
            <div className="">
              <img src={Portfolio3} alt="" />
            </div>
            <div className="content px-4 py-3 space-y-4">
              <h2 className="font-bold text-2xl">Real E-state website</h2>
              <div className="langauage space-x-1.5">
                <span className="border-2 px-3 font-semibold  bg-[#fdc4482c] rounded-xl" style={{ borderColor: "#FDC448" }}>Next js</span>
                <span className="border-2 px-3 font-semibold  bg-[#fdc4482c] rounded-xl" style={{ borderColor: "#FDC448" }}>Sanity.io</span>
                <span className="border-2 px-3 font-semibold  bg-[#fdc4482c] rounded-xl" style={{ borderColor: "#FDC448" }}>CSS</span>
              </div>
              <a href="https://real-estate-by-mohsin.surge.sh/" target="_blank">
                <button
                  data-aos="zoom-in"
                  type="submit"
                  value="Send"
                  className="bg-yellow-500 border-2 border-yellow-500 
                hover:bg-transparent hover:text-yellow-500 
                text-white px-6  font-semibold rounded-full 
                transition duration-300 cursor-pointer"
                >
                  Preview
                </button>
              </a>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Portfolio2;
