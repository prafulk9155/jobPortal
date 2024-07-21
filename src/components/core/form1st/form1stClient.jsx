import React, { useState } from 'react';

const from1stClient = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    password: '',
    companyName: '',
    workType: 'Software',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission
    console.log(formData);
  };

  return (
    <form className="max-w-lg mx-auto p-4" onSubmit={handleSubmit}>
      <h2 className="text-2xl font-semibold mb-4">Client Sign Up</h2>
      
      {/* Name */}
      <div className="mb-4">
        <label className="block mb-1 font-medium">Name</label>
        <input
          type="text"
          name="name"
          value={formData.name}
          onChange={handleChange}
          className="w-full p-2 border border-gray-300 rounded"
          required
        />
      </div>

      {/* Email */}
      <div className="mb-4">
        <label className="block mb-1 font-medium">Email</label>
        <input
          type="email"
          name="email"
          value={formData.email}
          onChange={handleChange}
          className="w-full p-2 border border-gray-300 rounded"
          required
        />
      </div>

      {/* Password */}
      <div className="mb-4">
        <label className="block mb-1 font-medium">Password</label>
        <input
          type="password"
          name="password"
          value={formData.password}
          onChange={handleChange}
          className="w-full p-2 border border-gray-300 rounded"
          required
        />
      </div>

      {/* Company Name */}
      <div className="mb-4">
        <label className="block mb-1 font-medium">Company Name</label>
        <input
          type="text"
          name="companyName"
          value={formData.companyName}
          onChange={handleChange}
          className="w-full p-2 border border-gray-300 rounded"
          required
        />
      </div>

      {/* Work Type */}
      <div className="mb-4">
        <label className="block mb-1 font-medium">Work Type</label>
        <select
          name="workType"
          value={formData.workType}
          onChange={handleChange}
          className="w-full p-2 border border-gray-300 rounded"
          required
        >
          <option value="Software">Software</option>
          <option value="Design">Oil & Gas</option>
          <option value="Marketing">Marketing</option>
          <option value="Consulting">Consulting</option>
          <option value="Support">Design</option>
        </select>
      </div>

      <button type="submit" className="w-full p-2 bg-blue-500 text-white rounded">
        Create Account
      </button>
    </form>
  );
};

export default from1stClient;
