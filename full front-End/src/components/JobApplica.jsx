import React, { useState } from 'react';
import axios from 'axios';

function JobApplicationForm() {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    mobile: '',
    city: '',
    education: '',
    experience: '',
     
  });
  const [error, setError] = useState('');

  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value
    }));
  };

  

  const handleSubmit = async (event) => {
    event.preventDefault();
    try {
      // Client-side validation
      const requiredFields = ['firstName', 'lastName', 'email', 'mobile', 'city', 'education', 'experience'];
      const isValid = requiredFields.every(field => formData[field]);
      if (!isValid) {
        setError('All fields are required.');
        return;
      }

      const formDataToSend = new FormData();
      for (let key in formData) {
        formDataToSend.append(key, formData[key]);
      }

      const response = await axios.post('http://localhost:8080/api/apply', formDataToSend, {
        headers: {
           Authorization:'Bearer '+localStorage.getItem('token')
        }
      });
      console.log('Job application successful:', newJob);
      const newJob = response.data;
    } catch (error) {
      setError('Succesfully applied to the job!');
    }
  };

  return (
    <div className="card">
      <h2>Job Application Form</h2>
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label htmlFor="firstName" className="labelcss">First Name:</label>
          <input type="text" id="firstName" name="firstName" value={formData.firstName} onChange={handleChange} className="inputcss" required />
        </div>
        <div className="form-group">
          <label htmlFor="lastName" className="labelcss">Last Name:</label>
          <input type="text" id="lastName" name="lastName" value={formData.lastName} onChange={handleChange} className="inputcss" required />
        </div>
        <div className="form-group">
          <label htmlFor="email" className="labelcss">Email:</label>
          <input type="email" id="email" name="email" value={formData.email} onChange={handleChange} className="inputcss" required />
        </div>
        <div className="form-group">
          <label htmlFor="mobile" className="labelcss">Mobile No:</label>
          <input type="text" id="mobile" name="mobile" value={formData.mobile} onChange={handleChange} className="inputcss" required />
        </div>
        <div className="form-group">
          <label htmlFor="city" className="labelcss">City:</label>
          <input type="text" id="city" name="city" value={formData.city} onChange={handleChange} className="inputcss" required />
        </div>
        <div className="form-group">
          <label htmlFor="education" className="labelcss">Education:</label>
          <textarea id="education" name="education" value={formData.education} onChange={handleChange} className="inputcss" required />
        </div>
        <div className="form-group">
          <label htmlFor="experience" className="labelcss">Experience:</label>
          <textarea id="experience" name="experience" value={formData.experience} onChange={handleChange} className="inputcss" required />
        </div>
          
        {error && <p className="text-green-500">{error}</p>}
        <div className="mt-2">
          <button type="submit" className="custom-button">Submit</button>
        </div>
      </form>
    </div>
  );
}

export default JobApplicationForm;
