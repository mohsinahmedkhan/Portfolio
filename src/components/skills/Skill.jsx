import React from "react";
import Reactlogo from '../../assets/React.png'
import Tailwind from '../../assets/Tailwind.png'
import Bootsrap from '../../assets/bootsrap.png'
import Html from '../../assets/html.png'
import Js from '../../assets/jslogo.png'
import Css from '../../assets/css.png'
import Redux from '../../assets/Reduxs.png'
import Git from '../../assets/Gits.png'
import Tilt from 'react-parallax-tilt';
import AOS from 'aos';
import 'aos/dist/aos.css';
import { useEffect } from 'react';


const Skill = () => {
  useEffect(() => {
  AOS.init({ duration: 1000 });
}, []);
  return (
    <div>
      <section className="md:py-20 md:px-30 px-0 bg-[#060606] font-[Rajdhani] text-white">
        <div className="skill-container px-10 py-9  space-y-10 bg-[#141414] rounded-4xl">
          {/* left content */}
        <div className="headings font-bold flex flex-col gap-2 ">
            <h3  data-aos="zoom-out-up" className="text-2xl text-[#FDC448] uppercase ">My SKILL</h3>
            <h1  data-aos="zoom-out-up" className="text-4xl font-bold ">My Experts Areas Where I Gained Skill</h1>
            <p  data-aos="zoom-out-up" className="text-gray-300 text-[17px] font-semibold max-w-3xl">Business consulting consultants provide expert advice and guida busi nesses to help them improve their performance, efficiency, and organ izational Business consulting consultants provide</p>
        </div>
        <div className="skill-box-conatiner">
      <div className="grid grid-cols-2 sm:grid-cols-2 lg:grid-cols-4 gap-y-4 gap-x-2 mt-10 font-[Rajdhani] items-center lg:px-10">

          <Tilt>

  <div data-aos="zoom-in" data-aos-delay="600" className="w-[145px] md:w-[200px] h-[150px] bg-transparent border-2 rounded-2xl transition-all duration-500 hover:scale-105 hover:-translate-y-1 hover:bg-gradient-to-br hover:from-[#a58f4c] hover:to-[#a87b2e] hover:shadow-xl hover:shadow-yellow-300/30 "
  style={{ borderColor: "#FDC448" }}
>
  {/* Logo Image */}
  <img
    className="img w-[70px] mx-auto mt-4 transition-all duration-500 group-hover:scale-110 group-hover:rotate-6"
    src={Reactlogo}
    alt="React Logo"
    />

  {/* Progress Bar */}
  <div className=" p-2 rounded-lg shadow-inner transition-all duration-500 group-hover:bg-black/60">
    <div className="w-full bg-[#1a1a1a] rounded-full h-6 overflow-hidden border-2" style={{borderColor:"#FDC448"}}>
      <div
        className="h-full text-white text-sm font-bold text-center flex items-center justify-center rounded-full transition-all duration-500 group-hover:text-lg"
        style={{
          width: "75%",
          background: "#FDC448"
        }}
        >
        75%
      </div>
    </div>
  </div>
</div>
</Tilt>
<Tilt>

  <div data-aos="zoom-in" data-aos-delay="600" className="w-[145px] md:w-[200px] h-[150px] bg-transparent border-2 rounded-2xl transition-all duration-500 hover:scale-105 hover:-translate-y-1 hover:bg-gradient-to-br hover:from-[#a58f4c] hover:to-[#a87b2e] hover:shadow-xl hover:shadow-yellow-300/30 "
  style={{ borderColor: "#FDC448" }}
>
  {/* Logo Image */}
  <img
    className="img w-[70px] mx-auto mt-4 transition-all duration-500 group-hover:scale-110 group-hover:rotate-6"
    src={Js}
    alt="Js Logo"
    />

  {/* Progress Bar */}
  <div className=" p-2 rounded-lg shadow-inner transition-all duration-500  mt-1 ">
    <div className="w-full bg-[#1a1a1a] rounded-full h-6 overflow-hidden border-2" style={{borderColor:"#FDC448"}}>
      <div
        className="h-full text-white text-sm font-bold text-center flex items-center justify-center rounded-full transition-all duration-500 group-hover:text-lg"
        style={{
          width: "75%",
          background: "#FDC448"
        }}
      >
        75%
      </div>
    </div>
  </div>
</div>
        </Tilt>
        <Tilt>
          
  <div data-aos="zoom-in" data-aos-delay="600" className="w-[145px] md:w-[200px] h-[150px] bg-transparent border-2 rounded-2xl transition-all duration-500 hover:scale-105 hover:-translate-y-1 hover:bg-gradient-to-br hover:from-[#a58f4c] hover:to-[#a87b2e] hover:shadow-xl hover:shadow-yellow-300/30 "
  style={{ borderColor: "#FDC448" }}
>
  {/* Logo Image */}
  <img
    className="img w-[70px] mx-auto mt-4 transition-all duration-500 group-hover:scale-110 group-hover:rotate-6"
    src={Tailwind}
    alt="Tailwind Logo"
  />

  {/* Progress Bar */}
  <div className=" p-2 rounded-lg shadow-inner transition-all duration-500 group-hover:bg-black/60 mt-1">
    <div className="w-full bg-[#1a1a1a] rounded-full h-6 overflow-hidden border-2" style={{borderColor:"#FDC448"}}>
      <div
        className="h-full text-white text-sm font-bold text-center flex items-center justify-center rounded-full transition-all duration-500 group-hover:text-lg"
        style={{
          width: "70%",
          background: "#FDC448"
        }}
        >
        70%
      </div>
    </div>
  </div>
</div>
</Tilt>

<Tilt>

  <div data-aos="zoom-in" data-aos-delay="600" className="w-[145px] md:w-[200px] h-[150px] bg-transparent border-2 rounded-2xl transition-all duration-500 hover:scale-105 hover:-translate-y-1 hover:bg-gradient-to-br hover:from-[#a58f4c] hover:to-[#a87b2e] hover:shadow-xl hover:shadow-yellow-300/30 "
  style={{ borderColor: "#FDC448" }}
>
  {/* Logo Image */}
  <img
    className="img w-[63px] mx-auto mt-4 transition-all duration-500 group-hover:scale-110 group-hover:rotate-6"
    src={Html}
    alt="Tailwind Logo"
  />

  {/* Progress Bar */}
  <div className=" p-2 rounded-lg shadow-inner transition-all duration-500 group-hover:bg-black/60 mt-1">
    <div className="w-full bg-[#1a1a1a] rounded-full h-6 overflow-hidden border-2" style={{borderColor:"#FDC448"}}>
      <div
        className="h-full text-white text-sm font-bold text-center flex items-center justify-center rounded-full transition-all duration-500 group-hover:text-lg"
        style={{
          width: "90%",
          background: "#FDC448"
        }}
        >
        90%
      </div>
    </div>
  </div>
</div>
        </Tilt>
        <Tilt>

  <div data-aos="zoom-in" data-aos-delay="600" className="w-[145px] md:w-[200px] h-[150px] bg-transparent border-2 rounded-2xl transition-all duration-500 hover:scale-105 hover:-translate-y-1 hover:bg-gradient-to-br hover:from-[#a58f4c] hover:to-[#a87b2e] hover:shadow-xl hover:shadow-yellow-300/30 "
  style={{ borderColor: "#FDC448" }}
>
  {/* Logo Image */}
  <img
    className="img w-[70px] mx-auto mt-4 transition-all duration-500 group-hover:scale-110 group-hover:rotate-6"
    src={Css}
    alt="Tailwind Logo"
    />

  {/* Progress Bar */}
  <div className=" p-2 rounded-lg shadow-inner transition-all duration-500 group-hover:bg-black/60 mt-1">
    <div className="w-full bg-[#1a1a1a] rounded-full h-6 overflow-hidden border-2" style={{borderColor:"#FDC448"}}>
      <div
        className="h-full text-white text-sm font-bold text-center flex items-center justify-center rounded-full transition-all duration-500 group-hover:text-lg"
        style={{
          width: "80%",
          background: "#FDC448"
        }}
        >
        80%
      </div>
    </div>
  </div>
</div>
        </Tilt>
        <Tilt>
  <div data-aos="zoom-in" data-aos-delay="600" className="w-[145px] md:w-[200px] h-[150px] bg-transparent border-2 rounded-2xl transition-all duration-500 hover:scale-105 hover:-translate-y-1 hover:bg-gradient-to-br hover:from-[#a58f4c] hover:to-[#a87b2e] hover:shadow-xl hover:shadow-yellow-300/30 "
  style={{ borderColor: "#FDC448" }}
>
  {/* Logo Image */}
  <img
    className="img w-[80px] mx-auto mt-4 transition-all duration-500 group-hover:scale-110 group-hover:rotate-6"
    src={Bootsrap}
    alt="Tailwind Logo"
  />

  {/* Progress Bar */}
  <div className=" p-2 rounded-lg shadow-inner transition-all duration-500 group-hover:bg-black/60 mt-1">
    <div className="w-full bg-[#1a1a1a] rounded-full h-6 overflow-hidden border-2" style={{borderColor:"#FDC448"}}>
      <div
        className="h-full text-white text-sm font-bold text-center flex items-center justify-center rounded-full transition-all duration-500 group-hover:text-lg"
        style={{
          width: "65%",
          background: "#FDC448"
        }}
      >
        60%
      </div>
    </div>
  </div>
</div>
</Tilt>

  <div data-aos="zoom-in" data-aos-delay="600" className="w-[145px] md:w-[200px] h-[150px] bg-transparent border-2 rounded-2xl transition-all duration-500 hover:scale-105 hover:-translate-y-1 hover:bg-gradient-to-br hover:from-[#a58f4c] hover:to-[#a87b2e] hover:shadow-xl hover:shadow-yellow-300/30 "
  style={{ borderColor: "#FDC448" }}
>
  {/* Logo Image */}
  <img
    className="img w-[80px] mx-auto mt-4 transition-all duration-500 group-hover:scale-110 group-hover:rotate-6"
    src={Redux}
    alt="Tailwind Logo"
  />

  {/* Progress Bar */}
  <div className=" p-2 rounded-lg shadow-inner transition-all duration-500 group-hover:bg-black/60 mt-1">
    <div className="w-full bg-[#1a1a1a] rounded-full h-6 overflow-hidden border-2" style={{borderColor:"#FDC448"}}>
      <div
        className="h-full text-white text-sm font-bold text-center flex items-center justify-center rounded-full transition-all duration-500 group-hover:text-lg"
        style={{
          width: "65%",
          background: "#FDC448"
        }}
      >
        60%
      </div>
    </div>

  </div>
</div>
<Tilt>

  <div data-aos="zoom-in" data-aos-delay="600" className="w-[145px] md:w-[200px] h-[150px] bg-transparent border-2 rounded-2xl transition-all duration-500 hover:scale-105 hover:-translate-y-1 hover:bg-gradient-to-br hover:from-[#a58f4c] hover:to-[#a87b2e] hover:shadow-xl hover:shadow-yellow-300/30 "
  style={{ borderColor: "#FDC448" }}
  
>
  {/* Logo Image */}
  <img
    className="img w-[80px] mx-auto mt-4 transition-all duration-500 group-hover:scale-110 group-hover:rotate-6"
    src={Git}
    alt="Tailwind Logo"
    />

  {/* Progress Bar */}
  <div className=" p-2 rounded-lg shadow-inner transition-all duration-500 group-hover:bg-black/60 mt-1">
    <div className="w-full bg-[#1a1a1a] rounded-full h-6 overflow-hidden border-2" style={{borderColor:"#FDC448"}}>
      <div
        className="h-full text-white text-sm font-bold text-center flex items-center justify-center rounded-full transition-all duration-500 group-hover:text-lg"
        style={{
          width: "75%",
          background: "#FDC448"
        }}
        >
        77%
      </div>
    </div>
  </div>
</div>

        </Tilt>
          </div>
          </div>
        </div>
         
      </section>
    </div>
  );
};

export default Skill;
