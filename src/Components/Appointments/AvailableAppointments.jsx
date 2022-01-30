import React from 'react';
import Booking from './Booking';

const bookings = [
  {
    id: 1,
    name: "Teeth Orthodonics",
    time: "08.00 AM - 09.00 AM",
    price: 20,
    space: 10,
  },
  {
    id: 2,
    name: "Cosmetic Dentistry",
    time: "09.00 AM - 10.00 AM",
    price: 15,
    space: 8,
  },
  {
    id: 3,
    name: "Teeth Cleaning",
    time: "10.00 AM - 11.00 AM",
    price: 17,
    space: 9,
  },
  {
    id: 4,
    name: "Cavity Protection",
    time: "11.00 AM - 12.00 PM",
    price: 19,
    space: 5,
  },
  {
    id: 5,
    name: "Pediatric Dental",
    time: "06.00 PM - 07.00 PM",
    price: 25,
    space: 10,
  },
  {
    id: 6,
    name: "Oral Surgery",
    time: "07.00 PM - 08.00 PM",
    price: 35,
    space: 10,
  },
];

const AvailableAppointments = ({date}) => {
  return (
    <div>
      <h1 className="text-center text-5xl text-cyan-500 font-medium -mt-0 bg-slate-100 rounded-xl p-2 mx-40 z-2">
        This is Available Appointment {date.toDateString()}
      </h1>

      <section className="text-gray-600 body-font">
        <div className="container px-5 py-24 mx-auto">
          <div className="flex flex-wrap -m-4">
            {bookings.map((booking) => (
              <Booking key={booking.id} booking={booking} date={date} />
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default AvailableAppointments;