
import React, { useState } from 'react';
import './Signin.css';

const Signin = ({ onClose }) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    
    console.log('Email:', email);
    console.log('Password:', password);
  };

  return (
    <div className="popup">
      <button onClick={onClose} className="close-button">X</button>
      <div className="p-4 text-center">

        <section className="overflow-hidden rounded-lg shadow-2xl login-ui">
          <div className="p-8 bg-gray-100">
             <h2 className="mt-6 font-black uppercase text-gray-800 text-2xl sm:text-3xl lg:text-4xl">
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
                  className="w-full px-3 py-2 border rounded-lg text-gray-800"
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
                  className="w-full px-3 py-2 border rounded-lg text-gray-800"
                  placeholder="Enter your password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                />
              </div>

              <button
                type="submit"
                className="mt-8 inline-block w-full bg-gray-800 py-4 text-sm font-bold uppercase tracking-widest text-white"
              >
                Sign In
              </button>
            </form>
          </div>
        </section>
      </div>
    </div>
  );
};

export default Signin;
