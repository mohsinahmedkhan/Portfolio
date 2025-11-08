import React, { useEffect } from "react";
import AOS from 'aos';
import 'aos/dist/aos.css';
import Resume from '../../assets/Mohsinahmedkhanresume.pdf'

const About = () => {
  useEffect(() => {
    AOS.init({ duration: 1000 });
  }, []);

  return (
    <div id='aboutcontainer'>
      <section  className="py-20 px-6 sm:px-10 bg-[#060606] text-white">
        <div  className="container w-full h-full mx-w-7xl flex flex-col  md:flex-row items-center justify-center gap-10 font-[Rajdhani]">

          {/* // left content // */}
          <div className="about-left w-full md:w-1/2 space-y-6 top-20 md:top-0">
            <div className="relative w-full flex justify-center items-center">

              {/* Glow Effect */}
              <div className="absolute -top-20 md:left-30 w-82 h-82 bg-yellow-500 rounded-full blur-2xl opacity-70 z-0"></div>

              {/* Foreground Content */}
              <div
                className="relative z-10 bg-black  text-white p-8 rounded-2xl -top-30 md:left-30 text-center"
                data-aos="fade-up"
              >
                <h2 className="text-5xl font-bold text-[var(--primary-color)] ">02+</h2>
                <p className="text-3xl font-semibold">Years of Learning <br />Experience</p>
              </div>

              <div className="2-card">
                <div
                  className="relative z-10 bg-black text-white p-8 rounded-2xl top-20 text-center"
                  data-aos="fade-up"
                  data-aos-delay="200"
                >
                  <h2 className="text-5xl font-bold">10+</h2>
                  <p className="text-xl font-semibold">Project Completed</p>
                </div>
              </div>
            </div>
          </div>

          {/* // right content // */}
          <div className="about-right w-full md:w-1/2">
            <h2
              className="text-xl text-[var(--primary-color)] font-bold"
              data-aos="fade-right"
            >
              ABOUT ME
            </h2>

            <div
              className="para flex flex-col gap-5 text-lg text-[#9F9F9F] mt-5"
              data-aos="fade-up"
              data-aos-delay="100"
            >
              <p className="font-semibold">
                Hi there! I'm Mohsin Ahmed Khan, a passionate frontend developer
                dedicated to crafting captivating digital experiences. With a
                keen eye for design and a love for clean, efficient code, I
                specialize in bringing beautiful interfaces to life.
              </p>
              <p className="font-semibold">
                My journey in web development began with a curiosity for
                creating visually stunning websites that not only look great but
                also deliver seamless user experiences. Over the years, I've
                honed my skills in HTML, CSS,JavaScript and React to build
                responsive, dynamic web applications that engage and delight
                users.
              </p>
            </div>

            <div
              className="about-btn flex gap-5 mt-5"
              data-aos="zoom-in"
              data-aos-delay="200"
            >
              <a href="#contact">

              <button className="bg-yellow-500 border-2 border-yellow-500 
                   hover:bg-transparent hover:text-yellow-500 
                   text-white px-12 py-3 font-bold rounded-full 
                   transition duration-300 cursor-pointer">
                Contact Me
              </button>
                     </a>
              <a href={Resume}
              target="_blank">
              <button className="bg-yellow-500 border-2 border-yellow-500 
                   hover:bg-transparent hover:text-yellow-500 
                   text-white px-10 py-3 font-bold rounded-full 
                   transition duration-300 cursor-pointer">
                Download CV
              </button>
                     </a>
            </div>
          </div>

        </div>
      </section>
    </div>
  );
};

export default About;
