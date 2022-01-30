import Paper from "@mui/material/Paper";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import React, { useEffect, useState } from 'react';
import useAuth from '../../../hooks/useAuth';

const Appointments = ({date}) => {
  const {user} = useAuth();
  const [appointments, setAppointments] = useState([]);
  useEffect(()=> {  
    fetch(`https://agile-gorge-57234.herokuapp.com/appointments?email=${user.email}&date=${date}`)
    .then(res=>res.json())
    .then(data=>setAppointments(data))
  }, [date])
  return (
    <div className="mr-6">
      <h2 className="text-5xl text-cyan-600 mb-4 py-6 font-sans">
        <b>{appointments.length}</b> appointments in queue
      </h2>
      <TableContainer component={Paper}>
        <Table aria-label="simple table">
          <TableHead>
            <TableRow>
              <TableCell sx={{ fontSize: "20px" }}>Patient Name</TableCell>
              <TableCell align="right" sx={{ fontSize: "20px" }}>
                Service
              </TableCell>
              <TableCell align="right" sx={{ fontSize: "20px" }}>
                Time
              </TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {appointments.map((row) => (
              <TableRow
                key={row._id}
                sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
              >
                <TableCell
                  component="th"
                  scope="row"
                  sx={{ fontSize: "18px", color: "#334155" }}
                >
                  {row.patientName}
                </TableCell>
                <TableCell
                  align="right"
                  sx={{ fontSize: "19px", color: "#334155" }}
                >
                  {row.serviceName}
                </TableCell>
                <TableCell
                  align="right"
                  sx={{ fontSize: "19px", color: "#334155" }}
                >
                  {row.time}
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </div>
  );
};

export default Appointments;