import React, { useState } from 'react';
import { Link, useHistory, useLocation } from 'react-router-dom';
import useAuth from "./../../../hooks/useAuth";
import CircularProgress from "@mui/material/CircularProgress";
import swal from "sweetalert";
import { Alert } from '@mui/material';

const Register = () => {
  const [loginData, setLoginData] = useState({});
  const {user, registerUser, isLoading, authError}= useAuth()
  const history = useHistory();
  const handleOnChange = (e) => {
    const field = e.target.name;
    const value = e.target.value;
    const newLoginData = { ...loginData };
    newLoginData[field] = value;
    setLoginData(newLoginData);
    console.log(loginData)
  };
  const handleRegisterSubmit = (e) => {
    e.preventDefault();
    if(loginData.password !== loginData.password2){
      alert('password did not match');
      return;
    }
    registerUser(loginData.email, loginData.password, loginData.name, history)
  };
  return (
    <div className="md:px-28 md:py-20 bg-gradient-to-l from-teal-800 to-cyan-800 min-h-screen text-center">
      {/* component */}
      {!isLoading && (
        <section className="flex  mx-auto h-full">
          <div
            className="bg-white rounded-xl md:max-w-md lg:max-w-full md:mx-auto md:w-1/2 xl:w-1/3 h-screen px-6 lg:px-16 xl:px-12 w-full lg:w-1/2
  flex items-center justify-center  "
          >
            <div className="w-full h-100">
              <h1 className="text-xl md:text-2xl font-bold leading-tight text-teal-700">
                Create an Account
              </h1>
              <form className="mt-6" onSubmit={handleRegisterSubmit}>
                <div>
                  <label className="block text-gray-700">Name</label>
                  <input
                    type="name"
                    name="name"
                    onChange={handleOnChange}
                    id
                    placeholder="Your Name"
                    className="w-full px-4 py-3 rounded-lg bg-gray-200 mt-2 border focus:border-blue-500 focus:bg-white focus:outline-none"
                    autoComplete="none"
                    autoFocus="true"
                    required
                  />
                </div>
                <div className="mt-4">
                  <label className="block text-gray-700">Email Address</label>
                  <input
                    type="email"
                    name="email"
                    onChange={handleOnChange}
                    id
                    placeholder="Enter Email Address"
                    className="w-full px-4 py-3 rounded-lg bg-gray-200 mt-2 border focus:border-blue-500 focus:bg-white focus:outline-none"
                    autoComplete="none"
                    autoFocus="true"
                    required
                  />
                </div>
                <div className="mt-4">
                  <label className="block text-gray-700">Password</label>
                  <input
                    type="password"
                    name="password"
                    onChange={handleOnChange}
                    placeholder="Enter Password"
                    minLength={6}
                    className="w-full px-4 py-3 rounded-lg bg-gray-200 mt-2 border focus:border-blue-500
          focus:bg-white focus:outline-none"
                    required
                    autoComplete="none"
                  />
                </div>
                <div className="mt-4">
                  <label className="block text-gray-700">
                    Confirm Password
                  </label>
                  <input
                    type="password"
                    name="password2"
                    onChange={handleOnChange}
                    placeholder="Retype Password"
                    minLength={6}
                    className="w-full px-4 py-3 rounded-lg bg-gray-200 mt-2 border focus:border-blue-500
          focus:bg-white focus:outline-none"
                    required
                    autoComplete="none"
                  />
                </div>

                <div className="mt-4">
                  {authError && <Alert severity="error">{authError}</Alert>}
                  {user?.email && (
                    <Alert severity="success" className="mt-3">
                      Account Created Successfully
                    </Alert>
                  )}
                </div>

                <button
                  type="submit"
                  className="w-full block bg-teal-500 hover:bg-teal-400 focus:bg-teal-400 text-white font-semibold rounded-lg
        px-4 py-3 mt-6"
                >
                  Create Account
                </button>
              </form>
              <hr className="my-6 border-gray-300 w-full" />
              <button
                type="button"
                className="w-full block bg-white hover:bg-gray-100 focus:bg-gray-100 text-gray-900 font-semibold rounded-lg px-4 py-3 border border-gray-300"
              >
                <div className="flex items-center justify-center">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    xmlnsXlink="http://www.w3.org/1999/xlink"
                    className="w-6 h-6"
                    viewBox="0 0 48 48"
                  >
                    <defs>
                      <path
                        id="a"
                        d="M44.5 20H24v8.5h11.8C34.7 33.9 30.1 37 24 37c-7.2 0-13-5.8-13-13s5.8-13 13-13c3.1 0 5.9 1.1 8.1 2.9l6.4-6.4C34.6 4.1 29.6 2 24 2 11.8 2 2 11.8 2 24s9.8 22 22 22c11 0 21-8 21-22 0-1.3-.2-2.7-.5-4z"
                      />
                    </defs>
                    <clipPath id="b">
                      <use xlinkHref="#a" overflow="visible" />
                    </clipPath>
                    <path
                      clipPath="url(#b)"
                      fill="#FBBC05"
                      d="M0 37V11l17 13z"
                    />
                    <path
                      clipPath="url(#b)"
                      fill="#EA4335"
                      d="M0 11l17 13 7-6.1L48 14V0H0z"
                    />
                    <path
                      clipPath="url(#b)"
                      fill="#34A853"
                      d="M0 37l30-23 7.9 1L48 0v48H0z"
                    />
                    <path
                      clipPath="url(#b)"
                      fill="#4285F4"
                      d="M48 48L17 24l-4-3 35-10z"
                    />
                  </svg>
                  <span className="ml-4">Sign Up with Google</span>
                </div>
              </button>

              
              <Link to="/login">
                <button className="mt-8">
                  Already have an account?{" "}
                  <span className="text-cyan-500 hover:text-cyan-700 font-semibold">
                    Log in
                  </span>
                </button>
              </Link>
            </div>
          </div>
        </section>
      )}
      {isLoading && <CircularProgress />}
    </div>
  );
};

export default Register;