// client/src/managents/Students.jsx

import React, { useEffect, useState } from "react";
import api from "../../api";
import TableSearch from "../../components/TableSearch";
import Input from "../../components/Input"
import Button from "../../components/Button";

const StudentsManagement = () => {
  const [students, setStudents] = useState([]);

  useEffect(() => {
    const fetchStudents = async () => {
      try {
        const response = await api.get("/students");
        setStudents(response.data);
      } catch (error) {
        console.error("Error fetching students", error);
      }
    };

    fetchStudents();
  }, []);

  const columns = [
    { header: "Идентификатор", field: "student_id" },
    { header: "Фамилия", field: "student_surname" },
    { header: "Имя", field: "student_name" },
    { header: "Отчество", field: "student_patronymic" },
    // Добавьте другие поля, если необходимо
  ];

  return (
    <main className="container">
      <h1>Студенты</h1>
      <TableSearch data={students} columns={columns} />
    </main>
  );
};

export default StudentsManagement;
