import React from 'react';

export default function Signup() {
  return (
    <>
      <section className="bg-white">



        
        <div className="relative flex items-center justify-center min-h-screen">
          <img
            alt=""
            src="https://images.unsplash.com/photo-1617195737496-bc30194e3a19?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80"
            className="absolute inset-0 h-full w-full object-cover opacity-80"
          />
          <div className="relative bg-white bg-opacity-90 p-8 rounded-lg shadow-lg max-w-xl mx-auto">
            <h2 className="text-2xl font-bold text-gray-900 sm:text-3xl md:text-4xl text-center">
              Welcome to Job Portal 🦑
            </h2>
            <p className="mt-4 leading-relaxed text-gray-700 text-center">
              Lorem, ipsum dolor sit amet consectetur adipisicing elit. Eligendi nam dolorum aliquam, quibusdam aperiam voluptatum.
            </p>
            <form action="#" className="mt-8 grid grid-cols-6 gap-6">
              <div className="col-span-6 sm:col-span-3">
                <label htmlFor="FirstName" className="block text-sm font-medium text-gray-700">
                  First Name
                </label>
                <input
                  type="text"
                  id="FirstName"
                  name="first_name"
                  className="mt-1 w-full rounded-md border-gray-200 bg-white text-sm text-gray-700 shadow-sm"
                />
              </div>
              <div className="col-span-6 sm:col-span-3">
                <label htmlFor="LastName" className="block text-sm font-medium text-gray-700">
                  Last Name
                </label>
                <input
                  type="text"
                  id="LastName"
                  name="last_name"
                  className="mt-1 w-full rounded-md border-gray-200 bg-white text-sm text-gray-700 shadow-sm"
                />
              </div>
              <div className="col-span-6">
                <label htmlFor="Email" className="block text-sm font-medium text-gray-700">
                  Email
                </label>
                <input
                  type="email"
                  id="Email"
                  name="email"
                  className="mt-1 w-full rounded-md border-gray-200 bg-white text-sm text-gray-700 shadow-sm"
                />
              </div>
              <div className="col-span-6 sm:col-span-3">
                <label htmlFor="Password" className="block text-sm font-medium text-gray-700">
                  Password
                </label>
                <input
                  type="password"
                  id="Password"
                  name="password"
                  className="mt-1 w-full rounded-md border-gray-200 bg-white text-sm text-gray-700 shadow-sm"
                />
              </div>
              <div className="col-span-6 sm:col-span-3">
                <label htmlFor="PasswordConfirmation" className="block text-sm font-medium text-gray-700">
                  Password Confirmation
                </label>
                <input
                  type="password"
                  id="PasswordConfirmation"
                  name="password_confirmation"
                  className="mt-1 w-full rounded-md border-gray-200 bg-white text-sm text-gray-700 shadow-sm"
                />
              </div>
              <div className="col-span-6">
                <label htmlFor="MarketingAccept" className="flex gap-4">
                  <input
                    type="checkbox"
                    id="MarketingAccept"
                    name="marketing_accept"
                    className="h-5 w-5 rounded-md border-gray-200 bg-white shadow-sm"
                  />
                  <span className="text-sm text-gray-700">
                    I want to receive emails about events, product updates and company announcements.
                  </span>
                </label>
              </div>
              <div className="col-span-6">
                <p className="text-sm text-gray-500">
                  By creating an account, you agree to our
                  <a href="#" className="text-gray-700 underline"> terms and conditions </a>
                  and
                  <a href="#" className="text-gray-700 underline">privacy policy</a>.
                </p>
              </div>
              <div className="col-span-6 sm:flex sm:items-center sm:gap-4">
                <button
                  className="inline-block shrink-0 rounded-md border border-blue-600 bg-blue-600 px-12 py-3 text-sm font-medium text-white transition hover:bg-transparent hover:text-blue-600 focus:outline-none focus:ring active:text-blue-500"
                >
                  Create an account
                </button>
                <p className="mt-4 text-sm text-gray-500 sm:mt-0">
                  Already have an account?
                  <a href="#" className="text-gray-700 underline">Log in</a>.
                </p>
              </div>
            </form>
          </div>
        </div>
      </section>
    </>
  );
}



// import React, { useState } from 'react';
// import './signup.css'

// const signup = ({ onClose }) => {
//   const [email, setEmail] = useState('');
//   const [password, setPassword] = useState('');
//   const [confirmPassword, setConfirmPassword] = useState('');

//   const handleSubmit = (e) => {
//     e.preventDefault();
//     // Handle sign-up logic here
//     if (password !== confirmPassword) {
//       alert('Passwords do not match');
//       return;
//     }
//     console.log('Email:', email);
//     console.log('Password:', password);
//   };

//   return (
//     <div className="popup">
//       <button onClick={onClose} className="close-button">X</button>
//       <div className="p-4 text-center">

//         <section className="overflow-hidden rounded-lg shadow-2xl login-ui">
//           <div className="p-8 bg-gray-100">
//             <h2 className="mt-6 font-black uppercase text-gray-800 text-2xl sm:text-3xl lg:text-4xl">
//               Sign Up
//             </h2>

//             <form className="mt-8" onSubmit={handleSubmit}>
//               <div className="mb-4">
//                 <label className="block text-sm font-bold mb-2 text-gray-800" htmlFor="email">
//                   Email Address
//                 </label>
//                 <input
//                   id="email"
//                   type="email"
//                   className="w-full px-3 py-2 border rounded-lg text-gray-800"
//                   placeholder="Enter your email"
//                   value={email}
//                   onChange={(e) => setEmail(e.target.value)}
//                 />
//               </div>

//               <div className="mb-4">
//                 <label className="block text-sm font-bold mb-2 text-gray-800" htmlFor="password">
//                   Password
//                 </label>
//                 <input
//                   id="password"
//                   type="password"
//                   className="w-full px-3 py-2 border rounded-lg text-gray-800"
//                   placeholder="Enter your password"
//                   value={password}
//                   onChange={(e) => setPassword(e.target.value)}
//                 />
//               </div>

//               <div className="mb-4">
//                 <label className="block text-sm font-bold mb-2 text-gray-800" htmlFor="confirmPassword">
//                   Confirm Password
//                 </label>
//                 <input
//                   id="confirmPassword"
//                   type="password"
//                   className="w-full px-3 py-2 border rounded-lg text-gray-800"
//                   placeholder="Confirm your password"
//                   value={confirmPassword}
//                   onChange={(e) => setConfirmPassword(e.target.value)}
//                 />
//               </div>

//               <button
//                 type="submit"
//                 className="mt-8 inline-block w-full bg-gray-800 py-4 text-sm font-bold uppercase tracking-widest text-white"
//               >
//                 Sign Up
//               </button>
//             </form>
//           </div>
//         </section>
//       </div>
//     </div>
//   );
// };

// export default signup;


