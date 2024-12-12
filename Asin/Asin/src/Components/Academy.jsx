import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import MembershipForm from "./Membershipform";
import { useEffect } from "react";

const Academy = () => {
        useEffect(()=>{
          window.scrollTo(0,0);
        },[]);  
  const settings = {
    dots: true, // Enable dots for navigation
    infinite: true,
    slidesToShow: 1, // Show one slide at a time
    slidesToScroll: 1, // Scroll one slide at a time
    autoplay: true,
    speed: 1000, // Transition speed between slides (1 second)
    autoplaySpeed: 3000, // Wait time before transitioning to the next slide
    cssEase: "ease-in-out", // Smooth animation
  };
  const icons=[
    { src: "./Images/c.AVIF", alt: "icon 1",heading:"Salon Essentials",text:"Introducing the Beauty Sleep Resurfacing Serum - the newest addition to our skincare line."},
    { src: "./Images/d.AVIF", alt: "icon 2",heading:"Make-Up",text:"A root colour touch up with seamless application and amazing results."},
    { src: "./Images/k.WEBP", alt: "icon 3",heading:"Classic Cut",text:"Transformative facial cleanser that clears away impurities, removes makeup, and softens skin." },
    { src: "./Images/G.JPEG", alt: "icon 4",heading:"Men's Hair Dressing",text:"Our face and body lotion hydrates and nourishes delicate skin leaving it soft and smooth." },
    { src: "./Images/j.JPEG", alt: "icon 5" ,heading:"Long Hair Dressing",text:"A root colour touch up with seamless application and amazing results."},
    { src: "./Images/i.JPEG", alt: "icon 6",heading:"Advance Cut & Color",text:"Transformative facial cleanser that clears away impurities, removes makeup, and softens skin." },
  ];

  const slides = [
    { src: "./Images/image1.JPEG", alt: "Slide 1" },
    { src: "./Images/image2.JPEG", alt: "Slide 2" },
    { src: "./Images/image3.JPEG", alt: "Slide 3" },
    { src: "./Images/image4.JPEG", alt: "Slide 4" },
    { src: "./Images/image5.JPEG", alt: "Slide 5" },
  ];

  const heading = "Welcome to the Asin Salon Academy in Delhi!";
  const paragraph =
    "Welcome to the world of beauty and hair salon excellence! At Asin Academy, we are dedicated to shaping the future of beauty professionals through our state-of-the-art beauty and hair salon academy in Delhi.";

  return (
    <div className="w-full mt-40 relative overflow-hidden">
      <Slider {...settings}>
        {slides.map((slide, index) => (
          <div key={index} className="relative">
            <img
              src={slide.src}
              alt={slide.alt}
              className="w-full h-[60vh] lg:h-[70vh] object-cover opacity-50"
            />
            <div className="absolute top-20 md:top-40 lg:top-20 md:right-96 flex flex-col justify-center items-center text-black">
              <h1 className="text-sm md:text-2xl lg:text-4xl font-bold text-center">
                {heading}
              </h1>
              <p className="text-sm lg:text-lg w-full lg:w-[700px] font-semibold mt-4 text-center">
                {paragraph}
              </p>
              <button className="mt-6 p-3 bg-black text-white font-semibold rounded-md shadow-md">
                Submit Your Enquiry
              </button>
            </div>
          </div>
        ))}
      </Slider>
      <div className="w-full mx-auto my-10 px-4 flex flex-col md:flex-row items-center justify-around mt-20 bg-gray-100">
        <div className="w-full md:w-[600px]">
          <h1 className="text-black font-bold text-xl md:text-3xl mb-3">About Asian Beauty Academy</h1>
          <p className="text-gray-600 mb-3">
            Our academy is specifically tailored to provide aspiring beauty
            enthusiasts with unparalleled training in the latest techniques,
            trends, and technologies within the beauty and hair salon industry in
            Delhi. Whether your ambition is to excel as a Hairstylist, Make-Up
            Artist, Skincare Specialist, or Nail Technician, our comprehensive
            programs cater to diverse interests within the realm of beauty and
            hair salon academy in Delhi..
          </p>
          <button className="bg-black text-white font-bold p-4">Know More</button>
        </div>
        {/*zooming image8*/}
        <div className="overflow-hidden w-[500px] h-[500px]">
            <img src="./Images/h.JPEG" alt="zoom image" className="w-full h-full rounded-sm hover:scale-125 transition-transform duration-1000"/>
        </div>
      </div>
      <div>
      <div className="flex flex-col items-center justify-center mt-10">
            <h1 className="text-xl font-bold md:text-3xl mb-3">Courses Offered</h1>
            <p className="text-gray-700 text-md md:text-xl font-semibold">Courses at our Salon Academy for Beginners and Professionals are delivered with passion and years of expertise</p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 space-x-2 space-y-3">
            {icons.map((icon,index)=>{
                return(
               <div key={index} className="relative overflow-hidden">
                <img
                src={icon.src}
                className="w-full h-[500px] hover:scale-125 transition-transform duration-1000"
                />
                <div className="absolute top-20 left-20">
                    <h1 className="text-white text-4xl font-bold mb-3">{icon.heading}</h1>
                    <p className="text-white text-2xl font-semibold mb-3">{icon.text}</p>
                    <button className="bg-white font-bold opacity-50 p-5">ENROLL NOW</button>
                </div>
               </div>
                );   
            })}
        </div>
        </div>
        <div className="mt-20 bg-orange-300">
           <MembershipForm/>
        </div>
      </div>
  );
};

export default Academy;
