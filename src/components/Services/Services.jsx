import React from "react";
import Tilt from "react-parallax-tilt";
import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";
const Services = () => {
  useEffect(() => {
    AOS.init({ duration: 1000 });
  }, []);
  return (
    <div id="services">
      <div className="service-container px-6 md:px-10 lg:px-20 bg-black py-6 pt-10">
        <h1 className="Name tracking-wider text-5xl font-bold text-[#FDC448] text-center">
          Services
        </h1>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mt-10 font-[Rajdhani]">
          <Tilt>
            <div
              className="service-box flex flex-col text-white gap-5 px-6 py-6 bg-[#141414] hover:bg-[#fdc4482c] border-b-2 transition-all duration-500 cursor-pointer shadow-md hover:bg-gradient-to-br hover:from-[#a58f4c] hover:to-[#a87b2e] hover:shadow-xl hover:shadow-yellow-300/30 rounded-lg"
              style={{ borderColor: "#FDC448" }}
              data-aos="fade-up"
              data-aos-anchor-placement="center-bottom"
            >

              <h5 className="text-[#FDC448] font-bold text-xl">01</h5>
              <h2 className="text-2xl font-bold">Frontend Development</h2>
              <p className="text-gray-300 font-semibold">
                I create customized websites that combine performance and
                design, delivering tailored solutions for every business need.
              </p>
              <p className="font-bold text-3xl">
                <ion-icon name="arrow-forward-outline"></ion-icon>
              </p>
            </div>
          </Tilt>

          <Tilt>
            {/* Service Box 2 */}
            <div
              className="service-box flex flex-col text-white gap-5 px-6 py-6 bg-[#141414] hover:bg-[#fdc4482c] border-b-2 transition-all duration-500 cursor-pointer shadow-md hover:bg-gradient-to-br hover:from-[#a58f4c] hover:to-[#a87b2e] hover:shadow-xl hover:shadow-yellow-300/30 rounded-lg"
              style={{ borderColor: "#FDC448" }}
              data-aos="fade-up"
              data-aos-anchor-placement="center-bottom"
            >
              <h5 className="text-[#FDC448] font-bold text-xl">02</h5>
              <h2 className="text-2xl font-bold">UI/UX Design</h2>
              <p className="text-gray-300 font-semibold">
                Creating intuitive and visually appealing user interfaces with a
                focus on user experience and responsiveness.
              </p>
              <p className="font-bold text-3xl">
                <ion-icon name="arrow-forward-outline"></ion-icon>
              </p>
            </div>
          </Tilt>

          <Tilt>
            {/* Service Box 3 */}
            <div
              className="service-box flex flex-col text-white gap-5 px-6 py-6 bg-[#141414] hover:bg-[#fdc4482c] border-b-2 transition-all duration-500 cursor-pointer shadow-md hover:bg-gradient-to-br hover:from-[#a58f4c] hover:to-[#a87b2e] hover:shadow-xl hover:shadow-yellow-300/30 rounded-lg"
              style={{ borderColor: "#FDC448" }}
              data-aos="fade-up"
              data-aos-anchor-placement="center-bottom"

            >
              <h5 className="text-[#FDC448] font-bold text-xl">03</h5>
              <h2 className="text-2xl font-bold">Fullstack Integration</h2>
              <p className="text-gray-300 font-semibold">
                Combining frontend and backend for complete web solutions using
                modern tools and frameworks.
              </p>
              <p className="font-bold text-3xl">
                <ion-icon name="arrow-forward-outline"></ion-icon>
              </p>
            </div>
          </Tilt>
        </div>
      </div>
    </div>
  );
};

export default Services;
