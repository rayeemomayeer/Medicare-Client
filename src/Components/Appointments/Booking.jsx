import React from 'react';
import BookingModal from './BookingModal';

const Booking = ({booking, date}) => {
  const {name,time, price, space} = booking;
  const [openBooking, setBookingOpen] = React.useState(false);
  const handleBookingOpen = () => setBookingOpen(true);
  const handleBookingClose = () => setBookingOpen(false);
  return (
    <div className="p-4 lg:w-1/3">
      <div className="h-full bg-emerald-50 bg-opacity-75 px-8 pt-7 pb-7 rounded-lg overflow-hidden text-center relative">
        <h1 className="text-4xl font-medium text-cyan-900 mb-3">{name}</h1>
        <p className="leading-relaxed mb-3">
          Photo booth fam kinfolk cold-pressed sriracha leggings jianbing
          microdosing tousled waistcoat.
        </p>
        <p className="leading-relaxed uppercase text-emerald-500 font-bold text-xl mb-3">
          {time}
        </p>
        <p className="leading-relaxed capitalize font-medium  text-xl mb-3">
          {space} spaces available
        </p>

        <button
          onClick={handleBookingOpen}
          className="text-white bg-gradient-to-r from-cyan-500 to-teal-500 p-2 rounded-lg inline-flex items-center capitalize cursor-pointer hover:from-cyan-600 hover:to-teal-600"
        >
          Book Appointment
          <svg
            className="w-4 h-4 ml-2"
            viewBox="0 0 24 24"
            stroke="currentColor"
            strokeWidth="2"
            fill="none"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <path d="M5 12h14"></path>
            <path d="M12 5l7 7-7 7"></path>
          </svg>
        </button>
      </div>
      <BookingModal
        date={date}
        booking={booking}
        openBooking={openBooking}
        handleBookingClose={handleBookingClose}
      />
    </div>
  );
};

export default Booking;