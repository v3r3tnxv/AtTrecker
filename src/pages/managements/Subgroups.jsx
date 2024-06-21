// client/src/managents/SubGroups.jsx

import React, { useEffect, useState } from "react";
import api from "../../api";
import EntityTable from "../../components/EntityTable";

const SubGroupsManagement = () => {
  const [subgroups, setSubGroups] = useState([]);

  useEffect(() => {
    const fetchSubGroups = async () => {
      try {
        const response = await api.get("/subgroups");
        setSubGroups(response.data);
      } catch (error) {
        console.error("Error fetching subgroups", error);
      }
    };

    fetchSubGroups();
  }, []);

  const columns = [
    { header: "Идентификатор", field: "subgroup_id" },
    { header: "Название", field: "subgroup_name" },
    // Добавьте другие поля, если необходимо
  ];

  return (
    <main className="container">
      <h1>Подгруппы</h1>
      <EntityTable data={subgroups} columns={columns} />
    </main>
  );
};

export default SubGroupsManagement;
