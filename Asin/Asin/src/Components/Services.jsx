import {React,useEffect} from 'react';
import CheckCircleIcon from '@mui/icons-material/CheckCircle';

const Services = () => {
    useEffect(()=>{
        window.scrollTo(0,0);
      },[]);
  return (
    <div className="mt-32">
      {/* This margin ensures the content is pushed below the navbar */}
      <div className="relative">
        <img src="./Images/1.JPEG" className="w-full h-[60vh] object-cover" alt="Services" />
        <div className="absolute top-20 left-5 right-40 md:top-1/3 md:left-[100px] text-white font-bold">
          <div className="flex flex-col items-start justify-start md:gap-20 text-black">
            <h1 className="text-sm md:text-xl font-semibold space-x-3">S E R V I C E S</h1>
            <h1 className="text-sm md:text-4xl font-bold w-full md:w-2/3">
              We offer a superior standard of professional colour, cut and hair care services.
            </h1>
          </div>
        </div>
      </div>
      <div className="container mx-auto flex flex-col mt-20">
        <div className="flex flex-col md:flex-row items-center justify-around">
          <div className="relative p-6 border-yellow-600 border-8"> {/* Create gap with padding */}
            <img
              src="./Images/2.JPEG"
              className="w-full md:w-[600px] h-auto object-cover animate-move-vertically z-[-50]"
              alt="Service Image"
            />
          </div>
          <div className='flex flex-col items-start justify-start gap-2 md:w-[300px]'>
            <h1 className='text-2xl font-bold'>Hair</h1>
            <h1 className='text-xl font-semibold'>Unique & Personalized Hair Cuts</h1>
            <div className='text-gray-500 text-lg'>
            <p><CheckCircleIcon className='text-yellow-500 mr-3'/>Hair Cut</p>
            <p><CheckCircleIcon className='text-yellow-500 mr-3'/>Ironing</p>
            <p><CheckCircleIcon className='text-yellow-500 mr-3'/>Global Colouring</p>
            <p><CheckCircleIcon className='text-yellow-500 mr-3'/>Blow Dry</p>
            <p><CheckCircleIcon className='text-yellow-500 mr-3'/>Root Touch Up</p>
            <p><CheckCircleIcon className='text-yellow-500 mr-3'/>Shampoo & Conditioning</p>
            <p><CheckCircleIcon className='text-yellow-500 mr-3'/>Head Massage</p>
            </div>
          </div>
        </div>
      </div>
      <div className="container mx-auto flex flex-col mt-20">
        <div className="flex flex-col md:flex-row items-center justify-around">
          <div className="relative p-6 border-yellow-600 border-8"> {/* Create gap with padding */}
            <img
              src="./Images/3.JPEG"
              className="w-full md:w-[600px] h-auto object-cover animate-move-vertically z-[-50]"
              alt="Service Image"
            />
          </div>
          <div className='flex flex-col items-start justify-start gap-2 md:w-[300px]'>
            <h1 className='text-2xl font-bold'>Skin</h1>
            <h1 className='text-xl font-semibold'>Skin rituals help in maintaining a healthy skin.</h1>
            <div className='text-gray-500 text-lg'>
            <p><CheckCircleIcon className='text-yellow-500 mr-3'/>Face Rituals</p>
            <p><CheckCircleIcon className='text-yellow-500 mr-3'/>Body Spa</p>
            <p><CheckCircleIcon className='text-yellow-500 mr-3'/>Hands & Feet Spa - Manicure & Pedicure</p>
            </div>
          </div>
        </div>
      </div>
      <div className="container mx-auto flex flex-col mt-20">
        <div className="flex flex-col md:flex-row items-center justify-around">
          <div className="relative p-6 border-yellow-600 border-8"> {/* Create gap with padding */}
            <img
              src="./Images/4.JPEG"
              className="w-full md:w-[600px] h-auto object-cover animate-move-vertically z-[-50]"
              alt="Service Image"
            />
          </div>
          <div className='flex flex-col items-start justify-start gap-2 md:w-[300px]'>
            <h1 className='text-2xl font-bold'>MAKE-UP</h1>
            <h1 className='text-xl font-semibold'>We ensure your Hair & Makeup makes you look your best versions and enhances your features</h1>
            <div className='text-gray-500 text-lg'>
            <p><CheckCircleIcon className='text-yellow-500 mr-3'/>Party Make Up</p>
            <p><CheckCircleIcon className='text-yellow-500 mr-3'/>Engagement Make Up</p>
            <p><CheckCircleIcon className='text-yellow-500 mr-3'/>Bridal & Reception Make Up</p>
            <p><CheckCircleIcon className='text-yellow-500 mr-3'/>Base Make Up</p>
            <p><CheckCircleIcon className='text-yellow-500 mr-3'/>Eye Make Up</p>
            </div>
          </div>
        </div>
      </div>
      <div className="container mx-auto flex flex-col mt-20">
        <div className="flex flex-col md:flex-row items-center justify-around">
          <div className="relative p-6 border-yellow-600 border-8"> {/* Create gap with padding */}
            <img
              src="./Images/5.JPEG"
              className="w-full md:w-[600px] h-auto object-cover animate-move-vertically z-[-50]"
              alt="Service Image"
            />
          </div>
          <div className='flex flex-col items-start justify-start gap-2 md:w-[300px]'>
            <h1 className='text-2xl font-bold'>NALS</h1>
            <h1 className='text-xl font-semibold'>Exclusively introduced and designed for our clients who love to flaunt healthy,beautiful nails</h1>
            <div className='text-gray-500 text-lg'>
            <p><CheckCircleIcon className='text-yellow-500 mr-3'/>Nail Paint</p>
            <p><CheckCircleIcon className='text-yellow-500 mr-3'/>Nail Art</p>
            <p><CheckCircleIcon className='text-yellow-500 mr-3'/>Nail Filling</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Services;
