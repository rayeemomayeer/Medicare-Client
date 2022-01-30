import React from "react";
import Calendar from "../Shared/Calendar/Calendar";
import Appointments from '../Dashboard/Appointments/Appointments'

const Schedule = () => {
  const [date, setDate] = React.useState(new Date());
  return (
    <div className="grid grid-cols-2 pt-40 pr-20">
      <div>
        <Calendar date={date} setDate={setDate} />
      </div>
      <div className="">
        <Appointments date={date} />
      </div>
    </div>
  );
};

export default Schedule;
