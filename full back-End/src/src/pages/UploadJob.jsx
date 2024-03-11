import React, { useState } from "react";
import axios from "axios";
import { CustomButton, TextInput } from "../components";

const UploadJob = () => {
  const [formData, setFormData] = useState({
    jobTitle: "",
    jobType: "",
    salary: "",
    vacancies: "",
    experience: "",
    location: "",
    desc: "",
    responsibilities: "",
  });

  const [errMsg, setErrMsg] = useState("");

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post("/api/jobs", formData);
      console.log("Job posted successfully:", response.data);

    } catch (error) {
      console.error("Error posting job:", error);
   
    }
  };

  return (
    <div className="container mx-auto flex flex-col md:flex-row gap-8 2xl:gap-14 bg-[#f7fdfd] px-5">
      <div className="w-full h-fit md:w-2/3 2xl:2/4 bg-white px-5 py-10 md:px-10 shadow-md">
        <div>
          <p className="text-gray-500 font-semibold text-2xl">Job Post</p>
          <form
            className="w-full mt-2 flex flex-col gap-8"
            onSubmit={handleSubmit}
          >
            <TextInput
              name="jobTitle"
              label="Job Title"
              placeholder="eg. Software Engineer"
              type="text"
              value={formData.jobTitle}
              onChange={handleChange}
              required={true}
            />
            <TextInput
              name="jobType"
              label="Job Type"
              placeholder="eg. Full-Time"
              type="text"
              value={formData.jobType}
              onChange={handleChange}
              required={true}
            />
            <TextInput
              name="salary"
              label="Salary (USD)"
              placeholder="eg. 1500"
              type="number"
              value={formData.salary}
              onChange={handleChange}
              required={true}
            />
            <TextInput
              name="vacancies"
              label="No. of Vacancies"
              placeholder="eg. 5"
              type="number"
              value={formData.vacancies}
              onChange={handleChange}
              required={true}
            />
            <TextInput
              name="experience"
              label="Years of Experience"
              placeholder="eg. 2"
              type="number"
              value={formData.experience}
              onChange={handleChange}
              required={true}
            />
            <TextInput
              name="location"
              label="Job Location"
              placeholder="eg. New York"
              type="text"
              value={formData.location}
              onChange={handleChange}
              required={true}
            />
            <TextInput
              name="desc"
              label="Job Description"
              placeholder="Enter job description"
              type="text"
              value={formData.desc}
              onChange={handleChange}
              required={true}
            />
            <TextInput
              name="responsibilities"
              label="Core Responsibilities"
              placeholder="Enter core responsibilities"
              type="text"
              value={formData.responsibilities}
              onChange={handleChange}
              required={true}
            />
            {errMsg && (
              <span role="alert" className="text-sm text-red-500 mt-0.5">
                {errMsg}
              </span>
            )}
            <div className="mt-2">
              <CustomButton
                type="submit"
                containerStyles="inline-flex justify-center rounded-md border border-transparent bg-blue-600 px-8 py-2 text-sm font-medium text-white hover:bg-[#1d4fd846] hover:text-[#1d4fd8] focus:outline-none"
                title="Submit"
              />
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default UploadJob;
