import React, { useEffect } from 'react';

const Contactus = () => {
  useEffect(()=>{
    window.scrollTo(0,0);
  },[]);
  return (
    <div className='mt-32'>
       <div className='relative w-full'>
          <img src="./Images/p2.WEBP" className='w-full h-[60vh] lg:h-[70vh]'/>
          <div className='absolute top-60 left-2 md:top-[350px] md:left-20 lg:top-60 lg:left-10'>
              <div className='md:p-10 p-3 bg-black shadow-2xl rounded-lg w-[200px] md:w-[400px]'>
                 <h1 className='text-white font-bold text-xs md:text-3xl md:mb-10'>Location & Contact us
                 </h1>
                 <p className='text-white md:mb-5 md:text-md text-xs'>For inquiries, collaborations, or appointments, please don’t hesitate to contact us at AsinSalon in Delhi. We’re here to assist you with any questions or needs you may have. We eagerly anticipate connecting with you soon!</p>
                 <div className='flex flex-row gap-4'>
                 <button className='border-2 md:p-3 text-white border-white p-px md:text-lg text-xs' >Salon Finder</button>
                 <button className='border-2 md:p-3 text-white border-white p-px md:text-lg text-xs'>Contact Us</button>
                 </div>
              </div>
          </div>
       </div>
      
      <div className="flex flex-col md:flex-row items-center justify-around gap-10 mt-20">
        <div className="flex flex-col items-start justify-start w-screen md:w-[500px]">
          <h1 className="text-3xl mb-3 font-bold">Enquiry</h1>
          <p className="text-xl text-gray-600">Please fill the following details if you are interested in partnering with us</p>
        </div>
        <div className="flex flex-col items-start justify-start w-screen md:w-[500px]">
          <h1 className="text-3xl mb-3 font-bold">ASIN Salon Southx ( New Delhi )</h1>
          <p className="text-md text-gray-600">
          South Extension II E-32, 2nd Floor, South Extension, Market Part II, New Delhi, Delhi 110049, India
          0
          </p>
        </div>
      </div>

      <section className="text-gray-600 body-font relative">
        <div className="container px-5 py-24 mx-auto flex sm:flex-nowrap flex-wrap">
          <div className="lg:w-2/3 md:w-1/2 bg-gray-300 rounded-lg overflow-hidden sm:mr-10 p-10 flex items-end justify-start relative">
            <iframe 
              width="100%" 
              height="100%" 
              className="absolute inset-0" 
              frameBorder="0" 
              title="map" 
              marginHeight="0" 
              marginWidth="0" 
              scrolling="no" 
              src="https://maps.google.com/maps?width=100%&height=600&hl=en&q=%C4%B0zmir+(My%20Business%20Name)&ie=UTF8&t=&z=14&iwloc=B&output=embed" 
              style={{ filter: 'grayscale(1) contrast(1.2) opacity(0.4)' }}
            ></iframe>
            <div className="bg-white relative flex flex-wrap py-6 rounded shadow-md">
              <div className="lg:w-1/2 px-6">
                <h2 className="title-font font-semibold text-gray-900 tracking-widest text-xs">ADDRESS</h2>
                <p className="mt-1">Photo booth tattooed prism, Portland taiyaki hoodie neutra typewriter</p>
              </div>
              <div className="lg:w-1/2 px-6 mt-4 lg:mt-0">
                <h2 className="title-font font-semibold text-gray-900 tracking-widest text-xs">EMAIL</h2>
                <a className="text-indigo-500 leading-relaxed">example@email.com</a>
                <h2 className="title-font font-semibold text-gray-900 tracking-widest text-xs mt-4">PHONE</h2>
                <p className="leading-relaxed">123-456-7890</p>
              </div>
            </div>
          </div>
          
          <div className="lg:w-1/3 md:w-1/2 bg-white flex flex-col md:ml-auto w-full md:py-8 mt-8 md:mt-0">
            <h2 className="text-gray-900 text-lg mb-1 font-medium title-font">Have a Question</h2>
            <div className="relative mb-4">
              <label htmlFor="name" className="leading-7 text-sm text-gray-600">Name</label>
              <input 
                type="text" 
                id="name" 
                name="name" 
                className="w-full bg-white rounded border border-gray-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
              />
            </div>
            <div className="relative mb-4">
              <label htmlFor="email" className="leading-7 text-sm text-gray-600">Email</label>
              <input 
                type="email" 
                id="email" 
                name="email" 
                className="w-full bg-white rounded border border-gray-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
              />
            </div>
            <div className="relative mb-4">
              <label htmlFor="message" className="leading-7 text-sm text-gray-600">Message</label>
              <textarea 
                id="message" 
                name="message" 
                className="w-full bg-white rounded border border-gray-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
              />
            </div>
            <button className="text-white bg-indigo-500 border-0 py-2 px-6 focus:outline-none hover:bg-indigo-600 rounded text-lg">
              Submit
            </button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Contactus;
