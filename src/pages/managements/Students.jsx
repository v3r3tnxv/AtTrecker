// client/src/pages/managents/Students.jsx

import React, { useEffect, useState } from "react";
import api from "../../api";
import TableSearch from "../../components/TableSearch";
import AddForm from "../../components/AddForm";
import Modal from "../../components/layouts/Modal";
import Button from "../../components/Button";

const StudentsManagement = () => {
  const [students, setStudents] = useState([]);
  const [isModalOpen, setIsModalOpen] = useState(false);

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

  const handleAddStudent = async (student) => {
    try {
      const response = await api.post("/students", student);
      setStudents([...students, response.data]);
      setIsModalOpen(false);
    } catch (error) {
      console.error("Error adding student", error);
    }
  };

  const columns = [
    { header: "Идентификатор", field: "student_id" },
    { header: "Фамилия", field: "student_surname" },
    { header: "Имя", field: "student_name" },
    { header: "Отчество", field: "student_patronymic" },
  ];

  const fields = [
    { name: "student_surname", label: "Фамилия" },
    { name: "student_name", label: "Имя" },
    { name: "student_patronymic", label: "Отчество" },
  ];

  return (
    <main className="container">
      <h1>Студенты</h1>
      <Button className="button" onClick={() => setIsModalOpen(true)}>+ Добавить</Button>
      
      <TableSearch data={students} columns={columns} />

      <Modal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)}>
        <AddForm fields={fields} onSubmit={handleAddStudent} />
      </Modal>
    </main>
  );
};

export default StudentsManagement;
