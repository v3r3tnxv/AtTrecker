// client/src/pages/managents/Teachers.jsx

import React, { useEffect, useState } from "react";
import api from "../../api";
import TableSearch from "../../components/TableSearch";
import AddForm from "../../components/AddForm";
import Modal from "../../components/layouts/Modal";
import Button from "../../components/Button";

const TeachersManagement = () => {
  const [teachers, setTeachers] = useState([]);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedTeachers, setSelectedTeachers] = useState([]);

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

  const handleAddTeacher = async (teacher) => {
    try {
      const response = await api.post("/teachers", teacher);
      setTeachers([...teachers, response.data]);
      setIsModalOpen(false);
    } catch (error) {
      console.error("Error adding teacher", error);
    }
  };

  const handleDeleteTeachers = async () => {
    try {
      await api.delete("/teachers", { data: { ids: selectedTeachers } });
      setTeachers(teachers.filter((teacher) => !selectedTeachers.includes(teacher.teacher_id)));
      setSelectedTeachers([]);
    } catch (error) {
      console.error("Error deleting teachers", error);
    }
  };

  const columns = [
    { header: "Идентификатор", field: "teacher_id" },
    { header: "Фамилия", field: "teacher_surname" },
    { header: "Имя", field: "teacher_name" },
    { header: "Отчество", field: "teacher_patronymic" },
    // Добавьте другие поля, если необходимо
  ];

  const fields = [
    { name: "teacher_surname", label: "Фамилия" },
    { name: "teacher_name", label: "Имя" },
    { name: "teacher_patronymic", label: "Отчество" },
    // Добавьте другие поля, если необходимо
  ];

  return (
    <main className="container">
      <h1>Преподаватели</h1>
      <Button className="button" onClick={() => setIsModalOpen(true)}>
        + Добавить
      </Button>
      <Button
        className="button"
        onClick={handleDeleteTeachers}
        disabled={selectedTeachers.length === 0}
      >
        Удалить выбранные
      </Button>
      <TableSearch
        data={teachers}
        columns={columns}
        selectedItems={selectedTeachers}
        setSelectedItems={setSelectedTeachers}
      />
      <Modal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)}>
        <AddForm fields={fields} onSubmit={handleAddTeacher} />
      </Modal>
    </main>
  );
};

export default TeachersManagement;
