import React from 'react';
import { Link } from 'react-router-dom';
import Doctor from '../Doctors/Doctor';
import AppointmentBanner from './AppointmentBanner/AppointmentBanner';
import Specialities from './Specialities/Specialities';
import TopBanner from './TopBanner.js/TopBanner';
import TrustUs from './TrustUs/TrustUs';

const doctors = [
  {
    id: 1,
    name: "Dr.Brian Adam",
    details: "Restorative Dentist",
    img: "https://images.unsplash.com/photo-1582750433449-648ed127bb54?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=387&q=80",
  },
  {
    id: 2,
    name: "Dr.Brian Adam",
    details: "Restorative Dentist",
    img: "https://images.unsplash.com/photo-1584467735815-f778f274e296?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=387&q=80",
  },
  {
    id: 3,
    name: "Dr.Brian Adam",
    details: "Restorative Dentist",
    img: "https://images.unsplash.com/photo-1622253692010-333f2da6031d?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=464&q=80",
  }
];

const Home = () => {
  return (
    <div>
      <TopBanner />
      <TrustUs />
      <Specialities />

      <div className="py-24">
        <h1 className="text-center text-5xl text-cyan-900 font-bold rounded-xl">
          Meet Our Experts Doctors
        </h1>
        <p className="text-center text-gray-500 text-lg pt-6">
          Replenish him third creature and meat most of the blessed
          <br /> void a fruit gathered.
        </p>

        <section className="text-gray-600 body-font">
          <div className="container px-5 pt-8 pb-16 mx-auto">
            <div className="flex flex-wrap -m-4">
              {doctors.map((doctor) => (
                <Doctor key={doctor.id} doctor={doctor} />
              ))}
            </div>
          </div>
          <div className="text-center">
            <Link to="/doctors">
              <button className="capitalize p-3 px-5 rounded-full bg-sky-500 hover:bg-sky-600 text-white rounded-2xl hover:rounded-full hover:scale-110 transition ease-in-out delay-50 duration-300 hover:rotate-1 hover:skew-x-1 font-medium">
                view all doctors
              </button>
            </Link>
          </div>
        </section>
      </div>
      <AppointmentBanner />
    </div>
  );
};

export default Home;