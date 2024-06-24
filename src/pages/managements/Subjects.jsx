// client/src/pages/managents/Subjects.jsx

import React, { useEffect, useState } from "react";
import api from "../../api";
import TableSearch from "../../components/TableSearch";
import AddForm from "../../components/AddForm";
import Modal from "../../components/layouts/Modal";
import Button from "../../components/Button";

const SubjectsManagement = () => {
  const [subjects, setSubjects] = useState([]);
  const [isModalOpen, setIsModalOpen] = useState(false);

  useEffect(() => {
    const fetchSubjects = async () => {
      try {
        const response = await api.get("/subjects");
        setSubjects(response.data);
      } catch (error) {
        console.error("Error fetching subjects", error);
      }
    };

    fetchSubjects();
  }, []);

  const handleAddSubject = async (subject) => {
    try {
      const response = await api.post("/subjects", subject);
      setSubjects([...subjects, response.data]);
      setIsModalOpen(false);
    } catch (error) {
      console.error("Error adding subject", error);
    }
  };

  const columns = [
    { header: "Идентификатор", field: "subject_id" },
    { header: "Название предмета", field: "subject_name" },
    // Добавьте другие поля, если необходимо
  ];

  const fields = [
    { name: "subject_name", label: "Название предмета" },
    // Добавьте другие поля, если необходимо
  ];

  return (
    <main className="container">
      <h1>Предметы</h1>
      <Button className="button" onClick={() => setIsModalOpen(true)}>
        + Добавить предмет
      </Button>
      <TableSearch data={subjects} columns={columns} />
      <Modal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)}>
        <AddForm fields={fields} onSubmit={handleAddSubject} />
      </Modal>
    </main>
  );
};

export default SubjectsManagement;
