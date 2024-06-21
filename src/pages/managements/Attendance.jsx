// client/src/components/Attendance.jsx

import React, { useEffect, useState } from "react";
import api from "../../api";


const AttendanceManagement = () => {
  const [Attendance, setAttendance] = useState([]);

  useEffect(() => {
    const fetchAttendance = async () => {
      try {
        const response = await api.get("/Attendance");
        setAttendance(response.data);
      } catch (error) {
        console.error("Error fetching Attendance", error);
      }
    };

    fetchAttendance();
  }, []);

  return (
    <main className="container">
      <h1>Посещаемость</h1>
      <ul>
        {Attendance.map((attendance) => (
          <li key={attendance.attendance_id}>{attendance.attendance_name}</li>
        ))}
      </ul>
    </main>
  );
};

export default AttendanceManagement;

