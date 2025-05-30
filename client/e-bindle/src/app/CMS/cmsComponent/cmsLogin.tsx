"use client";
import React from "react";

const cmsLogin = () => {
  // TODO: Add login logic here


  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault();
    // Add your login logic here
    console.log("Login button clicked");
  };

  return (
    <>
    <div className="pb-10 pt-40 flex items-center justify-center bg-gradient-to-r p-4 ">
      <div className="bg-blue-100 rounded-xl shadow-lg p-8 max-w-md w-full border-2 border-gray-300 transition-transform transform hover:scale-115 duration-400">
        <h1 className="text-3xl font-bold text-center text-gray-800 mb-6">Admin Login</h1>
        <form className="space-y-6">
          <div>
            <label htmlFor="email" className="block text-sm font-medium text-gray-700">
              Email
            </label>
            <input
              type="text"
              id="email"
              name="email"
              required
              placeholder="Enter your email..."
              className=" bg-white mt-1 block w-full rounded-md border border-gray-300 px-3 py-2 shadow-sm placeholder-gray-400 focus:border-indigo-500 focus:ring-indigo-500 focus:outline-none focus:ring-1"
            />
          </div>
          <div>
            <label htmlFor="password" className="block text-sm font-medium text-gray-700">
              Password
            </label>
            <input
              type="password"
              id="password"
              name="password"
              required
              placeholder="Enter your password..."
              className="bg-white mt-2 block w-full rounded-md border border-gray-300 px-3 py-2 shadow-sm placeholder-gray-400 focus:border-indigo-500 focus:ring-indigo-500 focus:outline-none focus:ring-1"
            />
          </div>
          <button
            type="submit"
            onClick={handleLogin}
            className="w-full bg-indigo-600 text-white py-2 rounded-md text-lg font-semibold hover:bg-green-700 transition-colors duration-300 "
          >
            Login
          </button>
        </form>
      </div>
    </div>
    </>
  );
};


export default cmsLogin;
