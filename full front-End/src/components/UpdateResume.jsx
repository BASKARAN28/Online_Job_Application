import React, { useState } from 'react';

const UpdateResume = ({ onUpdateResume }) => {
  const [resume, setResume] = useState('');

  const handleResumeChange = (e) => {
    setResume(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Call the parent component function to update the resume
    onUpdateResume(resume);
  };

  return (
    <div>
      <h2>Update Resume</h2>
      <form onSubmit={handleSubmit}>
        <label>
          Upload your resume:
          <input type="file" onChange={handleResumeChange} />
        </label>
        <button type="submit">Update</button>
      </form>
    </div>
  );
};

export default UpdateResume;
