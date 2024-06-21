  // client/src/managents/Teachers.jsx

  import React, { useEffect, useState } from "react";
  import api from "../../api";
  import TableSearch from "../../components/TableSearch";
  import Input from "../../components/Input";
  import Button from "../../components/Button";

  const TeachersManagement = () => {
    const [teachers, setTeachers] = useState([]);

    useEffect(() => {
      const fetchTeachers = async () => {
        try {
          const response = await api.get("/teachers");
          setTeachers(response.data);
        } catch (error) {
          console.error("Error fetching teachers", error);
        }
      };

      fetchTeachers();
    }, []);

    const columns = [
      { header: "Идентификатор", field: "teacher_id" },
      { header: "Фамилия", field: "teacher_surname" },
      { header: "Имя", field: "teacher_name" },
      { header: "Отчество", field: "teacher_patronymic" },
      // Добавьте другие поля, если необходимо
    ];

    return (
      <main className="container">
        <h1>Преподаватели</h1>
        <TableSearch data={teachers} columns={columns} />
      </main>
    );
  };

  export default TeachersManagement;

