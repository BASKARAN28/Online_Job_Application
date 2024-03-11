import React, { useState } from 'react';
import axios from 'axios';
import './signin.css';
import CustomButton from './CustomButton';

function Sign({ onSignIn }) {
  const [userInfo, setUserInfo] = useState({
    name: '',
    email: '',
    password: '',
    confirmPassword: '',
    phoneNumber: '',
    address: '',
    education: '',
    experience: '',
    skill: ''
  });
  const [error, setError] = useState('');

  const handleChange = (event) => {
    const { name, value } = event.target;
    setUserInfo((prevUserInfo) => ({
      ...prevUserInfo,
      [name]: value
    }));
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    try {
      // Client-side validation
      if (!userInfo.name || !userInfo.email || !userInfo.password || !userInfo.confirmPassword) {
        setError('All fields are required.');
        return;
      }
      if (userInfo.password !== userInfo.confirmPassword) {
        setError("Passwords doesn't match.");
        return;
      }
        

      const response = await axios.post('http://localhost:8080/auth/new', userInfo);
     
      const message = response.data;
      alert(message);  

      if (message === 'User added to the system.') {
                      onSignIn();
      }
    } catch (error) {
      
      setError('Sign up successfully');
    }
  };

  return (
    <div className="card">
      <h2>Sign Up</h2>
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label htmlFor="name" className='labelcss'>Name:</label>
          <input type="text" id="name" name="name" value={userInfo.name} onChange={handleChange} className='inputcss' required/>
        </div>
        <div className="form-group">
          <label htmlFor="email" className='labelcss'>Email:</label>
          <input type="email" id="email" name="email" value={userInfo.email} onChange={handleChange} className='inputcss' required/>
        </div>
        <div className="form-group">
          <label htmlFor="password" className='labelcss'>Password:</label>
          <input type="password" id="password" name="password" value={userInfo.password} onChange={handleChange} className='inputcss' required/>
        </div>
        <div className="form-group">
          <label htmlFor="confirmPassword" className='labelcss'>Confirm Password:</label>
          <input type="password" id="confirmPassword" name="confirmPassword" value={userInfo.confirmPassword} onChange={handleChange} className='inputcss' required/>
        </div>
        <div className="form-group">
          <label htmlFor="phoneNumber" className='labelcss'>Phone Number:</label>
          <input type="tel" id="phoneNumber" name="phoneNumber" value={userInfo.phoneNumber} onChange={handleChange} className='inputcss'/>
        </div>
        <div className="form-group">
          <label htmlFor="address" className='labelcss'>Address:</label>
          <input type="text" id="address" name="address" value={userInfo.address} onChange={handleChange} className='inputcss'/>
        </div>
        <div className="form-group">
          <label htmlFor="education" className="labelcss">Education:</label>
          <textarea id="education" name="education" value={userInfo.education} onChange={handleChange} className="inputcss" required />
        </div>
        <div className="form-group">
          <label htmlFor="experience" className="labelcss">Experience:</label>
          <textarea id="experience" name="experience" value={userInfo.experience} onChange={handleChange} className="inputcss" required />
        </div>
        <div className="form-group">
          <label htmlFor="skill" className="labelcss">Skills:</label>
          <textarea id="skill" name="skill" value={userInfo.skill} onChange={handleChange} className="inputcss" required />
        </div>
        {error && <p className="text-green-500">{error}</p>}
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
