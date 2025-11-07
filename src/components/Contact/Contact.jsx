import React,{useState,useRef,useEffect} from "react";
import emailjs from '@emailjs/browser';
import toast, { Toaster } from 'react-hot-toast';
import AOS from 'aos';
import 'aos/dist/aos.css';
const Contact = () => {
  useEffect(() => {
      AOS.init({ duration: 1000 });
    }, []);
  
  const [done,setDone]=useState(false)
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();
    toast.success("Your message has been sent",)

    emailjs.sendForm('service_1wpoenu', 'template_09wbrmn', form.current, 'QDZpo6dWhTxCs5pKx')
      .then((result) => {
          console.log(result.text);
          setDone(true)
           e.target.reset(); 
      }, (error) => {
          console.log(error.text);
      });
  };

  return (
    <div id="contact">
      <section className="md:py-20 md:px-20 px-0 bg-[#060606] font-[Rajdhani] text-white">
        <div className="skill-container px-10 py-9  space-y-10 bg-[#141414] rounded-4xl flex flex-col lg:flex-row">
            {/* contact-left */}
            <div  className="contact-left mt-20">
                <h2 data-aos="zoom-out-right" className="md:text-5xl text-[42px] leading-12 font-bold w-[350px] md:w-[500px]">Let’s work brilliantly together!</h2>

                <div data-aos="zoom-out" className="info flex gap-4 mt-5 ">
                    <div className="icon border-2 rounded-full w-[40px] h-[40px] text-center pt-2 mt-1 text-[#FDC448]">
                     <ion-icon name="mail-unread-outline"></ion-icon>
                     </div>
                    <div data-aos="zoom-out" className="content">
                        <p className="text-gray-400 font-bold">E-mail:</p>
                        <h4 className="text-lg font-bold">mohsinahmedkhan667@gmail.com</h4>
                    </div>
                </div>
                
                <div data-aos="zoom-out" className="info flex gap-4 mt-5">
                    <div className="icon border-2 rounded-full w-[40px] h-[40px] text-center pt-2 mt-1 text-[#FDC448]">
                    <ion-icon name="location-outline"></ion-icon>
                     </div>
                    <div className="content">
                        <p className="text-gray-400 font-bold">Location:</p>
                        <h4 className="text-lg font-bold">Karachi, Pakistan</h4>
                    </div>
                </div>
                <div data-aos="zoom-out" className="info flex gap-4 mt-5">
                    <div className="icon border-2 rounded-full w-[40px] h-[40px] text-center pt-2 mt-1 text-[#FDC448]">
                <ion-icon name="call-outline"></ion-icon>
                     </div>
                    <div className="content">
                        <p className="text-gray-400 font-bold">Contact:</p>
                        <h4 className="text-lg font-bold">+92 3132999667</h4>
                    </div>
                </div>

            </div>
            {/* contact-right */}
            <div className="contact-right">
  <h2 data-aos="zoom-out" className="text-5xl font-bold">GET IN TOUCH</h2>

  <form className="contact-form mt-6" ref={form} onSubmit={sendEmail}>
    {/* Row 1: Name + Phone */}
    <div data-aos="fade-up" className="flex flex-col lg:flex-row gap-5 mb-5">
      <input type="text" placeholder="Your Name" className="flex-1 h-[60px] border rounded-xl p-3 w-full" name="user_name" required/>
      <input type="text" placeholder="Your Email" className="flex-1 h-[60px] border rounded-xl p-3 w-full" name="user_email" required/>
    </div>

    {/* Row 2: Email + Subject */}
    <div data-aos="fade-up" className="flex flex-col lg:flex-row gap-5 mb-5">
      <input type="text" placeholder="Your Phone " className="flex-1 h-[60px] border rounded-xl p-3 w-full" name="user_phone"  required/>
      <input type="text" placeholder="Subject" className="flex-1 h-[60px] border rounded-xl p-3 w-full" name='user_subject' required/>
    </div>

    {/* Row 3: Message */}
    <div data-aos="fade-up" className="mb-5">
      <textarea placeholder="Message" rows="5" className="w-full border rounded-xl p-3" name="message"></textarea>
    </div>

    {/* Button */}
  <button 
  data-aos="zoom-in"
  type="submit" value="Send" 
  className="bg-yellow-500 border-2 border-yellow-500 
                   hover:bg-transparent hover:text-yellow-500 
                   text-white px-10 py-3 font-bold rounded-full 
                   transition duration-300 cursor-pointer">
                Send Message
              </button>
               {done && <Toaster/>}
  </form>
</div>

        </div>
      </section>
    </div>
  );
};

export default Contact;
