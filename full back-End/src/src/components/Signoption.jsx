import React from 'react';
import { Link } from 'react-router-dom';
import CustomButton from './CustomButton';

const SignInOptions = () => {
  return (
    <div className="card">
      <h2>Welcome! Please select an option to sign in:</h2>
      <div> 
        <div className='mt-2'>
        <Link to="/asig">
          <CustomButton
            type='submit'
            containerStyles='inline-flex justify-center rounded-md border border-transparent bg-blue-600 px-8 py-2 text-sm font-medium text-white hover:bg-[#1d4fd846] hover:text-[#1d4fd8] focus:outline-none '
            title='Admin Login '
          />
           </Link>
        </div>
        
        <div className='mt-2'>
        <Link to="/sign">
          <CustomButton
            type='submit'
            containerStyles='inline-flex justify-center rounded-md border border-transparent bg-blue-600 px-8 py-2 text-sm font-medium text-white hover:bg-[#1d4fd846] hover:text-[#1d4fd8] focus:outline-none '
            title='User Login'
          />
           </Link>
        </div>
      </div>
    </div>
  );
};

export default SignInOptions;
