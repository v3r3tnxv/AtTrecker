// client/src/managents/Groups.jsx

import React, { useEffect, useState } from "react";
import api from "../../api";
import EntityTable from "../../components/EntityTable";

const GroupsManagement = () => {
  const [groups, setGroups] = useState([]);

  useEffect(() => {
    const fetchGroups = async () => {
      try {
        const response = await api.get("/groups");
        setGroups(response.data);
      } catch (error) {
        console.error("Error fetching groups", error);
      }
    };

    fetchGroups();
  }, []);

  const columns = [
    { header: "Идентификатор", field: "group_id" },
    { header: "Название группы", field: "group_name" },
    // Добавьте другие поля, если необходимо
  ];

  return (
    <main className="container">
      <h1>Группы</h1>
      <EntityTable data={groups} columns={columns} />
    </main>
  );
};

export default GroupsManagement;

