import Backdrop from "@mui/material/Backdrop";
import Box from "@mui/material/Box";
import Fade from "@mui/material/Fade";
import Modal from "@mui/material/Modal";
import TextField from "@mui/material/TextField";
import React, { useState } from 'react';
import swal from "sweetalert";
import useAuth from "./../../hooks/useAuth";

const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 400,
  bgcolor: "background.paper",
  borderRadius: '15px',
  boxShadow: 24,
  p: 4,
};
const BookingModal = ({ handleBookingClose, openBooking, booking, date }) => {
  const {name, time, space} = booking;
  const {user} = useAuth();
  const initialInfo = {patientName: user.displayName, email: user.email, phone: ''}
  const [bookingInfo, setBookingInfo] = useState(initialInfo)
  const handleOnChange = e => {
    const field = e.target.name;
    const value = e.target.value;
    const newInfo = {...bookingInfo}
    newInfo[field] = value;
    setBookingInfo(newInfo);
  }
  const handleBookingSubmit = e => {
    e.preventDefault();
    const appointment = {
      ...bookingInfo,
      time,
      serviceName: name,
      date: date.toLocaleDateString()
    }
    fetch("https://agile-gorge-57234.herokuapp.com/appointments", {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(appointment)
    }).then(res=>res.json()).then(data=>{
      if(data.insertedId){
        swal("Appointment Booked Successfully!", "", "success");
        handleBookingClose();
      }
    })
  }
  return (
    <Modal
      aria-labelledby="transition-modal-title"
      aria-describedby="transition-modal-description"
      open={openBooking}
      onClose={handleBookingClose}
      closeAfterTransition
      BackdropComponent={Backdrop}
      BackdropProps={{
        timeout: 500,
      }}
    >
      <Fade in={openBooking}>
        <Box sx={style}>
          <h1 className="text-3xl font-medium text-cyan-900 mb-3">{name}</h1>
          <form onSubmit={handleBookingSubmit}>
            <TextField
              disabled
              id="outlined-size-small"
              sx={{ width: "100%", m: 1 }}
              defaultValue={date.toDateString()}
              size="small"
            />
            <TextField
              disabled
              id="outlined-size-small"
              sx={{ width: "100%", m: 1 }}
              defaultValue={time}
              size="small"
            />
            <TextField
              id="outlined-size-small"
              sx={{ width: "100%", m: 1 }}
              defaultValue={user?.displayName}
              onChange={handleOnChange}
              name="patientName"
              size="small"
            />
            <TextField
              id="outlined-size-small"
              sx={{ width: "100%", m: 1 }}
              defaultValue={user?.email}
              onChange={handleOnChange}
              name="email"
              size="small"
            />
            <TextField
              id="outlined-size-small"
              sx={{ width: "100%", m: 1 }}
              placeholder="Phone Number"
              size="small"
              onChange={handleOnChange}
              name="phone"
            />
            <button
              type="submit"
              className="text-white bg-gradient-to-r from-cyan-500 to-teal-500 ml-2 p-2 px-4 rounded-lg inline-flex items-center capitalize cursor-pointer hover:from-cyan-600 hover:to-teal-600"
            >
              Book
            </button>
          </form>
        </Box>
      </Fade>
    </Modal>
  );
};

export default BookingModal;