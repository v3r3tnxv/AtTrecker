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
  const [selectedSubjects, setSelectedSubjects] = useState([]);

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

  const handleDeleteSubjects = async () => {
    try {
      await api.delete("/subjects", { data: { ids: selectedSubjects } });
      setSubjects(subjects.filter((subject) => !selectedSubjects.includes(subject.subject_id)));
      setSelectedSubjects([]);
    } catch (error) {
      console.error("Error deleting subjects", error);
    }
  };

  const columns = [
    { header: "Идентификатор", field: "subject_id" },
    { header: "Название предмета", field: "subject_name" },
  ];

  const fields = [{ name: "subject_name", label: "Название предмета" }];

  return (
    <main className="container">
      <h1>Дисциплины</h1>
      <Button className="button" onClick={() => setIsModalOpen(true)}>
        + Добавить
      </Button>
      <Button
        className="button"
        onClick={handleDeleteSubjects}
        disabled={selectedSubjects.length === 0}
      >
        Удалить выбранные
      </Button>
      <TableSearch
        data={subjects}
        columns={columns}
        selectedItems={selectedSubjects}
        setSelectedItems={setSelectedSubjects}
      />
      <Modal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)}>
        <AddForm fields={fields} onSubmit={handleAddSubject} />
      </Modal>
    </main>
  );
};

export default SubjectsManagement;
