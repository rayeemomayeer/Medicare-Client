import React from 'react';
import { Link } from 'react-router-dom';
import './TopBanner.css'

const TopBanner = () => {
  return (
    <header>
      <div className="bg-center bg-cover  top-banner">
        <div className="flex items-center justify-center w-full h-screen bg-gray-900 bg-opacity-60">
          <div className="text-center">
            <h1 className="text-2xl font-medium text-white lg:text-6xl">
              We Are Providing <br />
              Best and Affordable Health Care
            </h1>
            <Link to="/appointments">
              <button className="text-white hover:translate-y-2 bg-cyan-600 hover:bg-cyan-500 py-3 px-6 rounded-2xl hover:rounded-full my-2 text-xl font-medium hover:scale-110 transition ease-in-out delay-50 duration-300 hover:rotate-1 hover:skew-x-1">
                Book an Appointment
              </button>
            </Link>
          </div>
        </div>
      </div>
    </header>
  );
};

export default TopBanner;