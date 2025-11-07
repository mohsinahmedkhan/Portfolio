import React, { useRef } from 'react'
import Bg from '../../assets/bg.png'
import Boy from '../../assets/boy.jpeg'
import { motion } from "framer-motion";
import Tilt from 'react-parallax-tilt'
import Typed from 'typed.js';

const Hero = () => {
  const el = React.useRef(null);

  React.useEffect(() => {
    const typed = new Typed(el.current, {
      strings: [
        "Frontend Developer",
        "React.js Enthusiast",
        "Crafting Responsive UI"

      ],
      typeSpeed: 90,
      backSpeed: 50,
      loop: true,
    });

    return () => {
      // Destroy Typed instance during cleanup to stop animation
      typed.destroy();
    };
  }, []);

  return (
    <div>
      <section className="bg-[var(--bg-color)] py-20 px-6 sm:px-10 relative">

        <div className="max-w-7xl mx-auto flex flex-col-reverse md:flex-row items-center gap-10">

          {/* Left Content (Text) */}
          <div className="w-full md:w-1/2 space-y-5 ">

            <motion.h2
              ref={el}

              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="text-2xl sm:text-4xl text-[var(--primary-color)] font-bold"
              style={{ fontFamily: 'var(--heading-font)' }}
            >

            </motion.h2>

            <motion.h1
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="text-4xl md:text-7xl lg:text-8xl leading-[100%] text-white font-extrabold"
              style={{ fontFamily: 'var(--heading-font)' }}
            >
              Mohsin Ahmed Khan
            </motion.h1>

            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.7, delay: 0.4 }}
              className="text-lg text-gray-400"
            >
              I'm freelance frontend developer based in Pakistan, and I'm very passionate and dedicated to my work.
            </motion.p>
            <a
              href="https://wa.me/923412305655"
              target="_blank"
            >
              <motion.button
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.6, type: 'spring', stiffness: 200 }}
                className="bg-yellow-500 text-white border-2 border-yellow-500 
              hover:bg-transparent hover:text-yellow-500 
              px-12 py-3 font-bold rounded-full 
              transition-all duration-300 ease-in-out transform hover:scale-105 cursor-pointer"
              >
                Contact Me
              </motion.button>
            </a>
          </div>

          {/* Right Content (Image) */}
          <div className="w-full md:w-1/2 flex justify-center">
            <Tilt>

              <motion.img
                initial={{ x: 100, opacity: 0 }}
                animate={{ x: 0, opacity: 1 }}
                transition={{ duration: 0.7, delay: 0.5 }}
                src={Boy}
                alt="Hero"
                className="sm:w-[500px] sm:h-[700px] w-[400px] h-[340px] max-h-[500px] object-cover rounded-[240px] shadow-xl border-2"
                style={{ borderColor: 'var(--primary-color)' }}
              />
            </Tilt>
          </div>


        </div>

        {/* Background image */}
        <div className="absolute top-0 left-0 z-[-1]">
          <img src={Bg} alt="background" />
        </div>
      </section>
    </div>
  )
}

export default Hero
