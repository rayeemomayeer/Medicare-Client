import React from 'react';
import Calendar from '../Shared/Calendar/Calendar';
import img from './none.png';

const AppointmentHeader = ({date, setDate}) => {
  return (
    <section className="grid grid-cols-2 ">
      <div className="pt-40">
        <Calendar date={date} setDate={setDate}/>
      </div>
      <div>
        <img src={img} alt="" />
      </div>
    </section>
  );
};

export default AppointmentHeader;