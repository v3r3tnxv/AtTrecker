// client/src/pages/managents/SubGroups.jsx

import React, { useEffect, useState } from "react";
import api from "../../api";
import TableSearch from "../../components/TableSearch";
import AddForm from "../../components/AddForm";

const SubGroupsManagement = () => {
  const [subgroups, setSubGroups] = useState([]);
  const [groups, setGroups] = useState([]);

  useEffect(() => {
    const fetchSubGroups = async () => {
      try {
        const response = await api.get("/subgroups");
        setSubGroups(response.data);
      } catch (error) {
        console.error("Error fetching subgroups", error);
      }
    };

    const fetchGroups = async () => {
      try {
        const response = await api.get("/groups");
        setGroups(response.data);
      } catch (error) {
        console.error("Error fetching groups", error);
      }
    };

    fetchSubGroups();
    fetchGroups();
  }, []);

  const handleAddSubGroup = async (subgroup) => {
    try {
      const response = await api.post("/subgroups", subgroup);
      setSubGroups([...subgroups, response.data]);
    } catch (error) {
      console.error("Error adding subgroup", error);
    }
  };

  const columns = [
    { header: "Идентификатор", field: "subgroup_id" },
    { header: "Название подгруппы", field: "subgroup_name" },
    { header: "Название группы", field: "group_name" },
  ];

  const fields = [
    { name: "subgroup_name", label: "Название подгруппы", placeholder: "Введите название подгруппы" },
  ];

  return (
    <main className="container">
      <h1>Подгруппы</h1>
      <AddForm fields={fields} groups={groups} onSubmit={handleAddSubGroup} />
      <TableSearch data={subgroups} columns={columns} />
    </main>
  );
};

export default SubGroupsManagement;
