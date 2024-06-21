// client/src/managents/Statuses.jsx

import React, { useEffect, useState } from "react";
import api from "../../api";
import EntityTable from "../../components/EntityTable";

const StatusesManagement = () => {
  const [statuses, setStatuses] = useState([]);

  useEffect(() => {
    const fetchStatuses = async () => {
      try {
        const response = await api.get("/statuses");
        setStatuses(response.data);
      } catch (error) {
        console.error("Error fetching statuses", error);
      }
    };

    fetchStatuses();
  }, []);

  const columns = [
    { header: "Идентификатор", field: "status_id" },
    { header: "Название", field: "status_name" },
    // Добавьте другие поля, если необходимо
  ];

  return (
    <main className="container">
      <h1>Статусы</h1>
      <EntityTable data={statuses} columns={columns} />
    </main>
  );
};

export default StatusesManagement;
