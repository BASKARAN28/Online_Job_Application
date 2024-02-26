import React, { useState } from 'react';
import './signin.css';
import CustomButton from './CustomButton';

function Sign({ onSignIn }) {
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [email, setEmail] = useState('');
  const [mobile, setMobile] = useState('');
  const [city, setCity] = useState('');

  const handleSubmit = (event) => {
    event.preventDefault();
  
    const newUser = {
      firstName,
      lastName,
      email,
      mobile,
      city
    };
   
    onSignIn(newUser);
  };

  const handleFirstNameChange = (event) => {
    setFirstName(event.target.value);
  };

  const handleLastNameChange = (event) => {
    setLastName(event.target.value);
  };

  const handleEmailChange = (event) => {
    setEmail(event.target.value);
  };

  const handleMobileChange = (event) => {
    setMobile(event.target.value);
  };

  const handleCityChange = (event) => {
    setCity(event.target.value);
  };

  return (
    <div className="card">
      <h2>Sign Up</h2>
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label htmlFor="firstname"className='labelcss'>First namme:</label>
          <input type="text" id="firstname" name="firstname"  value={firstName} onChange={handleFirstNameChange} className='inputcss' required/>
        </div>
        <div className="form-group">
          <label htmlFor="lastname" className='labelcss'>Last Name:</label>
          <input type="text" id="lastname" name="lastname" value={lastName} onChange={handleLastNameChange} className='inputcss' required/>
        </div>
        <div className="form-group">
          <label htmlFor="email" className='labelcss'>Email:</label>
          <input type="email" id="email" name="email" value={email} onChange={handleEmailChange} className='inputcss' required/>
        </div>
        <div className="form-group">
          <label htmlFor="mobile"className='labelcss'>Mobile No:</label>
          <input type="text" id="mobile" name="mobile" value={mobile} onChange={handleMobileChange}className='inputcss' required/>
        </div>
        <div className="form-group">
          <label htmlFor="city" className='labelcss'>City:</label>
          <input type="text" id="city" name="city" value={city} onChange={handleCityChange} className='inputcss' required/>
        </div>
        <div className='mt-2'>
          <CustomButton
            type='submit'
            containerStyles='inline-flex justify-center rounded-md border border-transparent bg-blue-600 px-8 py-2 text-sm font-medium text-white hover:bg-[#1d4fd846] hover:text-[#1d4fd8] focus:outline-none '
            title='Sign Up'
          />
        </div>
      </form>
    </div>
  );
}

export default Sign;
