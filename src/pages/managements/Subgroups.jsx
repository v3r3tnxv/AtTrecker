// client/src/managents/SubGroups.jsx

import React, { useEffect, useState } from "react";
import api from "../../api";
import TableSearch from "../../components/TableSearch";

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
    { header: "Название подгруппы", field: "subgroup_name" },
    { header: "Название группы", field: "group_name" },
  ];

  return (
    <main className="container">
      <h1>Подгруппы</h1>
      <TableSearch data={subgroups} columns={columns} />
    </main>
  );
};

export default SubGroupsManagement;
