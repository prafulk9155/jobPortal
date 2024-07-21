import React, { useState } from 'react';

const FromCandidate = () => {
  const [formData, setFormData] = useState({
    personalInfo: {
      name: '',
      email: '',
      password: '',
    },
    experience: '',
    expectedCTC: '',
    location: '',
    files: [],
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleFileChange = (e) => {
    setFormData({
      ...formData,
      files: e.target.files,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission
    console.log(formData);
  };

  return (
    <form className="max-w-xl mx-auto p-4" onSubmit={handleSubmit}>
      {/* Personal Information */}
      <section className="mb-4">
        <h2 className="text-xl font-semibold mb-2">Personal Information</h2>
        <div className="mb-2">
          <label className="block mb-1">Name</label>
          <input
            type="text"
            name="name"
            value={formData.personalInfo.name}
            onChange={handleChange}
            className="w-full p-2 border border-gray-300 rounded"
          />
        </div>
        <div className="mb-2">
          <label className="block mb-1">Email</label>
          <input
            type="email"
            name="email"
            value={formData.personalInfo.email}
            onChange={handleChange}
            className="w-full p-2 border border-gray-300 rounded"
          />
        </div>
        <div className="mb-2">
          <label className="block mb-1">Password</label>
          <input
            type="password"
            name="password"
            value={formData.personalInfo.password}
            onChange={handleChange}
            className="w-full p-2 border border-gray-300 rounded"
          />
        </div>
      </section>

      {/* Experience */}
      <section className="mb-4">
        <h2 className="text-xl font-semibold mb-2">Experience</h2>
        <textarea
          name="experience"
          value={formData.experience}
          onChange={handleChange}
          className="w-full p-2 border border-gray-300 rounded"
        />
      </section>

      {/* Expected CTC */}
      <section className="mb-4">
        <h2 className="text-xl font-semibold mb-2">Expected CTC</h2>
        <input
          type="text"
          name="expectedCTC"
          value={formData.expectedCTC}
          onChange={handleChange}
          className="w-full p-2 border border-gray-300 rounded"
        />
      </section>

      {/* Location */}
      <section className="mb-4">
        <h2 className="text-xl font-semibold mb-2">Location</h2>
        <input
          type="text"
          name="location"
          value={formData.location}
          onChange={handleChange}
          className="w-full p-2 border border-gray-300 rounded"
        />
      </section>

      {/* File Upload */}
      <section className="mb-4">
        <h2 className="text-xl font-semibold mb-2">Upload Resume and Documents</h2>
        <input
          type="file"
          multiple
          onChange={handleFileChange}
          className="w-full p-2 border border-gray-300 rounded"
        />
      </section>

      <button type="submit" className="w-full p-2 bg-blue-500 text-white rounded">
        Submit
      </button>
    </form>
  );
};

export default FromCandidate;
