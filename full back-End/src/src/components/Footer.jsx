import React from 'react';
import './Footer.css'  
const Footer = () => {
  return (
    <footer className='text-white'>
      <div className='overflow-x-hidden'>
        {/* SVG background */}
      </div>

      <div className='bg-[#1d4ed8]'>
        <div className='container px-5 py-20 mx-auto'>
          <div className='flex flex-wrap gap-10 justify-between'>
            {/* Footer links */}
            <div className='w-full md:w-1/2 lg:w-auto mb-10 px-4'>
              <h2 className='text-xl font-bold mb-4'>Quick Links</h2>
              <ul className='space-y-2'>
                <li><a href='#' className='text-gray-300 hover:text-white'>Home</a></li>
                <li><a href='#' className='text-gray-300 hover:text-white'>About Us</a></li>
                <li><a href='#' className='text-gray-300 hover:text-white'>Services</a></li>
                <li><a href='#' className='text-gray-300 hover:text-white'>Contact</a></li>
              </ul>
            </div>
            {/* End of Footer links */}

            {/* Subscription form */}
            <div className='w-full md:w-1/2 lg:w-auto mb-10 px-4'>
              <h2 className='text-xl font-bold mb-4'>Subscribe to our Newsletter</h2>
              <form>
                <div className='flex items-center mb-4'>
                  <input type='email' placeholder='Your email' className='py-2 px-3 w-full bg-gray-100 border border-gray-300 rounded-md focus:outline-none focus:border-blue-400' />
                  <button type='submit' className='ml-2 py-2 px-4 bg-blue-600 text-white rounded-md hover:bg-blue-700 focus:outline-none focus:bg-blue-700'>Subscribe</button>
                </div>
              </form>
            </div>
            {/* End of Subscription form */}
          </div>
        </div>
      </div>

      {/* Bottom section */}
      <div className='bg-gray-900 py-4'>
         
      </div>
      {/* End of Bottom section */}
    </footer>
  );
};

export default Footer;
