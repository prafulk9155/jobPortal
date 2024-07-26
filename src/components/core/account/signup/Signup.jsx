
import React, { useState } from 'react';

export default function Signup() {
  const [selectedTab, setSelectedTab] = useState('Candidate');

  const renderCommonFields = () => (
    <>
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
    </>
  );

  const renderForm = () => {
    switch (selectedTab) {
      case 'Candidate':
        return (
          <>
            <h2 className="text-2xl font-bold text-gray-900 sm:text-3xl md:text-4xl text-center">
              Welcome to Job Portal 
            </h2>
            <h1 className="mt-4 leading-relaxed font-bold text-gray-700 text-center">
              Signup form for Candidates
            </h1>
            <form action="#" className="mt-8 grid grid-cols-6 gap-6">
              {renderCommonFields()}
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
          </>
        );
      case 'Recruiter':
        return (
          <>
            <h2 className="text-2xl font-bold text-gray-900 sm:text-3xl md:text-4xl text-center">
              Welcome to Job Portal 
            </h2>
            <h1 className="mt-4 leading-relaxed text-gray-700 text-center">
              Signup form for Recruiters
            </h1>
            <form action="#" className="mt-8 grid grid-cols-6 gap-6">
              {renderCommonFields()}
              <div className="col-span-6">
                <label htmlFor="Company" className="block text-sm font-medium text-gray-700">
                  Company
                </label>
                <input
                  type="text"
                  id="Company"
                  name="company"
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
          </>
        );
      case 'Client':
        return (
          <>
            <h2 className="text-2xl font-bold text-gray-900 sm:text-3xl md:text-4xl text-center">
              Welcome to Job Portal 
            </h2>
            <h1 className="mt-4 leading-relaxed text-gray-700 text-center">
              Signup form for Clients
            </h1>
            <form action="#" className="mt-8 grid grid-cols-6 gap-6">
              {renderCommonFields()}
              <div className="col-span-6">
                <label htmlFor="Company" className="block text-sm font-medium text-gray-700">
                  Company
                </label>
                <input
                  type="text"
                  id="Company"
                  name="company"
                  className="mt-1 w-full rounded-md border-gray-200 bg-white text-sm text-gray-700 shadow-sm"
                />
              </div>
              <div className="col-span-6">
                <label htmlFor="Role" className="block text-sm font-medium text-gray-700">
                  Role
                </label>
                <input
                  type="text"
                  id="Role"
                  name="role"
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
          </>
        );
      default:
        return null;
    }
  };

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
            <nav className="flex mb-4" aria-label="Tabs">
              {['Candidate', 'Recruiter', 'Client'].map((tab) => (
                <button
                  key={tab}
                  onClick={() => setSelectedTab(tab)}
                  className={`flex-1 text-center py-2 font-bold text-sm ${
                    selectedTab === tab
                      ? 'text-blue-600 border-b-2 border-blue-600'
                      : 'text-gray-700 hover:text-gray-700'
                  }`}
                >
                  {tab}
                </button>
              ))}
            </nav>
            {renderForm()}
          </div>
        </div>
      </section>
    </>
  );
}

