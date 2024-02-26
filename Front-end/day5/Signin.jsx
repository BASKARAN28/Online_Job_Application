import React, { useState } from 'react';
import './signin.css';
import CustomButton from './CustomButton';

function SignUp() {
  const [showSuccessMessage, setShowSuccessMessage] = useState(false);

  const handleSubmit = (event) => {
    event.preventDefault();
    // Simulate successful login
    // You can add your login logic here
    // For demonstration, I'm just showing the success message
    setShowSuccessMessage(true);
  };

  return (
    <div className="card">
      <h2>Sign In</h2>
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label htmlFor="email" className='labelcss'>Email:</label>
          <input type="email" id="email" name="email" className='inputcss' required />
        </div>
        <div className="form-group">
          <label htmlFor="password" className='labelcss'>Password:</label>
          <input type="password" id="password" name="password" className='inputcss' required/>
        </div>
        <div className='mt-2'>
          <CustomButton
            type='submit'
            containerStyles='inline-flex justify-center rounded-md border border-transparent bg-blue-600 px-8 py-2 text-sm font-medium text-white hover:bg-[#1d4fd846] hover:text-[#1d4fd8] focus:outline-none '
            title='Signin'
          />
        </div>
        <div>
          <text>Don't have account  </text><a href='/sig'> Sign UP Here</a>
        </div>
      </form>
      {showSuccessMessage && (
        <div className="success-message">
          Successfully logged in!
        </div>
      )}
    </div>
  );
}

export default SignUp;
