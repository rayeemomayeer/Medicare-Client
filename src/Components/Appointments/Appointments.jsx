import React from 'react';
import AppointmentHeader from './AppointmentHeader';
import AvailableAppointments from './AvailableAppointments';

const Appointments = () => {
  const [date, setDate] = React.useState(new Date());
  return (
    <div>
      <AppointmentHeader date={date} setDate={setDate} />
      <AvailableAppointments date={date} />
    </div>
  );
};

export default Appointments;