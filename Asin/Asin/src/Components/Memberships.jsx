import {React,useEffect} from 'react'
import CheckCircleIcon from '@mui/icons-material/CheckCircle';
import MembershipForm from './Membershipform';


const Memberships = () => {
    useEffect(()=>{
        window.scrollTo(0,0);
      },[]);
  return (
    <div className='mt-32'>
      <div className='relative w-full h-auto'>
         <img src="./Images/M.JPEG" className='w-full h-full md:h-[600px]'/>
         <div className='absolute top-20 left-16 md:top-1/2 md:left-[600px] flex flex-col items-center justify-center text-black'>
            <h1 className='text-xl md:text-6xl font-bold md:mb-10'>MemberShip</h1>
            <h1 className='text-base md:text-3xl font-semibold'>Checkout our ASIN Salon Memberships</h1>
         </div>
      </div>
      <div className='container mx-auto flex flex-col md:flex-row items-center justify-around mt-20'>
         <div className='w-[300px]'>
            <h1 className='text-black text-xl md:text-4xl font-bold'>Asin Salon offering exclusive membership..
            </h1>
         </div>
         <div className='text-gray-700 text-md text-xl w-screen md:w-[600px]'>
             <p className='mb-5'>Unlock exclusive benefits and savings by applying here for memberships. Join our thriving community today and elevate your beauty experience with premium perks tailored just for you. Don’t miss out – become a member and indulge in luxury every time you visit our salon.</p>
             <p className='mb-5'>*Our membership plans are applicable on occasions as well.</p>
             <p>*Each membership comes with exclusive benefits, such as discounts on services, priority booking, and special promotions.</p>
         </div>
      </div>
      <div className='container mx-auto flex flex-col'>
          <div className='flex flex-col items-center justify-center mt-10 md:mt-16 mb-10'>
               <h1 className='text-xl md:text-4xl font-bold'>Checkout our Membership Plans</h1>
          </div>
          <div className='container mx-auto flex flex-col md:flex-row items-center justify-around'>
          <div className='flex flex-col items-start justify-start gap-2 md:w-[550px]'>
            <h1 className='text-2xl font-bold'>PRIME MEMBERSHIP</h1>
            <h1 className='text-xl font-semibold'>Pay 10K and receive services valued at 14K!</h1>
            <div className='text-gray-500 text-lg'>
            <p><CheckCircleIcon className='text-yellow-500 mr-3'/>Enjoy this offer with your Family and friends.</p>
            <p><CheckCircleIcon className='text-yellow-500 mr-3'/>For more details, visit your nearest ASIN Salon.</p>
            <p><CheckCircleIcon className='text-yellow-500 mr-3'/>This membership is valid on services at Pan India ASIN Salons.</p>
            <p><CheckCircleIcon className='text-yellow-500 mr-3'/>Taxes as applicable, included.</p>
            <p><CheckCircleIcon className='text-yellow-500 mr-3'/>Benefits cannot be clubbed with other offers.</p>
            <button className='text-white p-5 bg-black font-bold mt-3'>Get Started</button>
            </div>
          </div>
          <div className="relative p-6 border-yellow-600 border-8"> {/* Create gap with padding */}
            <img
              src="./Images/2.JPEG"
              className="w-full md:w-[600px] h-auto object-cover animate-move-vertically"
              alt="Service Image"
            />
          </div>
          </div>
        <div className="flex flex-col md:flex-row items-center justify-around mt-20">
          <div className="relative p-6 border-yellow-600 border-8"> {/* Create gap with padding */}
            <img
              src="./Images/B.JPEG"
              className="w-full md:w-[600px] h-auto object-cover animate-move-vertically z-[-50]"
              alt="Service Image"
            />
          </div>
          <div className='flex flex-col items-start justify-start gap-2 md:w-[550px]'>
            <h1 className='text-2xl font-bold'>BRONZE MEMBERSHIP</h1>
            <h1 className='text-xl font-semibold'>Pay 20k and receive services valid at 26k!</h1>
            <div className='text-gray-500 text-lg'>
            <p><CheckCircleIcon className='text-yellow-500 mr-3'/>Enjoy this offer with your Family and friends.            </p>
            <p><CheckCircleIcon className='text-yellow-500 mr-3'/>For more details, visit your nearest ASIN Salon.</p>
            <p><CheckCircleIcon className='text-yellow-500 mr-3'/>This membership is valid on services at Pan India ASIN Salons.</p>
            <p><CheckCircleIcon className='text-yellow-500 mr-3'/>Taxes as applicable, included.</p>
            <p><CheckCircleIcon className='text-yellow-500 mr-3'/>Benefits cannot be clubbed with other offers.</p>
            <button className='text-white p-5 bg-black font-bold mt-3'>Get Started</button>
            </div>
          </div>
        </div>
        <div className='container mx-auto flex flex-col md:flex-row items-center justify-around mt-20'>
          <div className='flex flex-col items-start justify-start gap-2 md:w-[550px]'>
            <h1 className='text-2xl font-bold'>SILVER MEMBERSHIP</h1>
            <h1 className='text-xl font-semibold'>Pay 25K and receive services valued at 35K!</h1>
            <div className='text-gray-500 text-lg'>
            <p><CheckCircleIcon className='text-yellow-500 mr-3'/>Enjoy this offer with your Family and friends.</p>
            <p><CheckCircleIcon className='text-yellow-500 mr-3'/>For more details, visit your nearest ASIN Salon.</p>
            <p><CheckCircleIcon className='text-yellow-500 mr-3'/>This membership is valid on services at Pan India ASIN Salons.</p>
            <p><CheckCircleIcon className='text-yellow-500 mr-3'/>Taxes as applicable, included.</p>
            <p><CheckCircleIcon className='text-yellow-500 mr-3'/>Benefits cannot be clubbed with other offers.</p>
            <button className='text-white p-5 bg-black font-bold mt-3'>Get Started</button>
            </div>
          </div>
          <div className="relative p-6 border-yellow-600 border-8"> {/* Create gap with padding */}
            <img
              src="./Images/S.JPEG"
              className="w-full md:w-[600px] h-auto object-cover animate-move-vertically"
              alt="Service Image"
            />
          </div>
          </div>
          <div className="flex flex-col md:flex-row items-center justify-around mt-20">
          <div className="relative p-6 border-yellow-600 border-8"> {/* Create gap with padding */}
            <img
              src="./Images/G.JPEG"
              className="w-full md:w-[600px] h-auto object-cover animate-move-vertically z-[-50]"
              alt="Service Image"
            />
          </div>
          <div className='flex flex-col items-start justify-start gap-2 md:w-[550px]'>
            <h1 className='text-2xl font-bold'>GOLD MEMBERSHIP</h1>
            <h1 className='text-xl font-semibold'>Pay 50K and receive services valued at 75K!</h1>
            <div className='text-gray-500 text-lg'>
            <p><CheckCircleIcon className='text-yellow-500 mr-3'/>Enjoy this offer with your Family and friends.</p>
            <p><CheckCircleIcon className='text-yellow-500 mr-3'/>For more details, visit your nearest ASIN Salon.</p>
            <p><CheckCircleIcon className='text-yellow-500 mr-3'/>This membership is valid on services at Pan India ASIN Salons.</p>
            <p><CheckCircleIcon className='text-yellow-500 mr-3'/>Taxes as applicable, included.</p>
            <p><CheckCircleIcon className='text-yellow-500 mr-3'/>Benefits cannot be clubbed with other offers.</p>
            <button className='text-white p-5 bg-black font-bold mt-3'>Get Started</button>
            </div>
          </div>
        </div>
      </div>
      <div className='container mx-auto flex flex-col items-center justify-center mt-10 md:w-3/4'>
          <h1 className='text-3xl font-bold mb-5'>Apply Here For Membership</h1>
          <p className='text-gray-600 text-xl'>Unlock a World of Exclusive Benefits and Savings by Applying for Membership Today. Join Our Thriving Community and Elevate Your Beauty Experience with Premium Perks Tailored Just for You. Don’t Wait – Take Advantage of This Exclusive Opportunity and Sign Up for Memberships Now</p>
          <MembershipForm/>
      </div>
    </div>
  )
}

export default Memberships
