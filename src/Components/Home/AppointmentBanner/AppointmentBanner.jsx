import React from 'react';
import { Link } from 'react-router-dom';
import './AppointmentBanner.css'

const AppointmentBanner = () => {
  return (
    <div
      className="bg-blue-500 shadow-lg h-96 align-center m-12 mx-20 rounded-3xl p-24 item-center"
      id="appointmentBanner"
    >
      <div className="">
        <h1 className="text-6xl text-white font-medium pb-10">
          Don't Delay Care For You <br />
          and Those You Love.
        </h1>
        <Link to="/appointments">
          <button className="text-blue-500 hover:shadow-xl text-lg bg-white p-4 px-5 rounded-full font-medium hover:scale-110 transition ease-in-out delay-50 duration-300 hover:rotate-1 hover:skew-x-1 hover:translate-y-1">
            Book an Appointment
          </button>
        </Link>
      </div>
    </div>
  );
};

export default AppointmentBanner;