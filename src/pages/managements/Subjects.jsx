// client/src/managents/Subjects.jsx

import React, { useEffect, useState } from "react";
import api from "../../api";
import EntityTable from "../../components/EntityTable";

const SubjectsManagement = () => {
  const [subjects, setSubjects] = useState([]);

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

  const columns = [
    { header: "Идентификатор", field: "subject_id" },
    { header: "Название предмета", field: "subject_name" },
    // Добавьте другие поля, если необходимо
  ];

  return (
    <main className="container">
      <h1>Предметы</h1>
      <EntityTable data={subjects} columns={columns} />
    </main>
  );
};

export default SubjectsManagement;


