

import React, { useState } from 'react';

const Signin = () => {
  const [isOpen, setIsOpen] = useState(true);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    
    console.log('Email:', email);
    console.log('Password:', password);
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 flex items-center justify-center bg-gray-800 bg-opacity-50 z-50">
      <div className="relative bg-white p-8 rounded-lg shadow-lg max-w-sm w-full">
        <button
          onClick={() => setIsOpen(false)}
          className="absolute top-4 right-4 text-gray-500 hover:text-gray-700 text-lg"
        >
          &times;
        </button>
        <div className="text-center">
          <h2 className="text-2xl font-black uppercase text-gray-800">
            Sign In
          </h2>

          <form className="mt-8" onSubmit={handleSubmit}>
            <div className="mb-4">
              <label className="block text-sm font-bold mb-2 text-gray-800" htmlFor="email">
                Email Address
              </label>
              <input
                id="email"
                type="email"
                className="w-full px-3 py-2 border border-gray-300 rounded-lg text-gray-800"
                placeholder="Enter your email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
            </div>

            <div className="mb-4">
              <label className="block text-sm font-bold mb-2 text-gray-800" htmlFor="password">
                Password
              </label>
              <input
                id="password"
                type="password"
                className="w-full px-3 py-2 border border-gray-300 rounded-lg text-gray-800"
                placeholder="Enter your password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
            </div>

            <button
              type="submit"
              className="mt-8 inline-block w-full bg-gray-800 py-4 text-sm font-bold uppercase tracking-widest text-white rounded-lg"
            >
              Sign In
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Signin;
