// client/src/pages/managents/SubGroups.jsx

import React, { useEffect, useState } from "react";
import api from "../../api";
import TableSearch from "../../components/TableSearch";
import AddForm from "../../components/AddForm";
import Button from "../../components/Button";

const SubGroupsManagement = () => {
  const [subgroups, setSubGroups] = useState([]);
  const [groups, setGroups] = useState([]);
  const [selectedSubGroups, setSelectedSubGroups] = useState([]); // Добавляем состояние для выбранных подгрупп

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

  const handleDeleteSubGroup = async (subgroupId) => {
    try {
      await api.delete(`/subgroups/${subgroupId}`);
      setSubGroups(subgroups.filter((subgroup) => subgroup.subgroup_id !== subgroupId));
    } catch (error) {
      console.error("Error deleting subgroup", error);
    }
  };

  const handleDeleteSubGroups = async () => {
    try {
      await api.delete("/subgroups", { data: { ids: selectedSubGroups } });
      setSubGroups(
        subgroups.filter((subgroup) => !selectedSubGroups.includes(subgroup.subgroup_id))
      );
      setSelectedSubGroups([]);
    } catch (error) {
      console.error("Error deleting subgroups", error);
    }
  };

  const columns = [
    { header: "Идентификатор", field: "subgroup_id" },
    { header: "Название подгруппы", field: "subgroup_name" },
    { header: "Название группы", field: "group_name" },
    // Другие поля по необходимости
  ];

  const fields = [
    {
      name: "subgroup_name",
      label: "Название подгруппы",
      placeholder: "Введите название подгруппы",
    },
    {
      name: "group_id",
      label: "Группа",
      type: "select",
      options: groups.map((group) => ({ value: group.group_id, label: group.group_name })),
    },
    // Другие поля по необходимости
  ];

  return (
    <main className="container">
      <h1>Подгруппы</h1>
      <AddForm fields={fields} onSubmit={handleAddSubGroup} />
      <Button
        className="button"
        onClick={handleDeleteSubGroups}
        disabled={selectedSubGroups.length === 0}
      >
        Удалить выбранные
      </Button>
      <TableSearch
        data={subgroups}
        columns={columns}
        onDelete={handleDeleteSubGroup} // Передаем функцию удаления одной подгруппы
        onSelectionChange={setSelectedSubGroups} // Обновляем состояние выбранных подгрупп
        selectedItems={selectedSubGroups} // Передаем выбранные подгруппы для отображения в интерфейсе
      />
    </main>
  );
};

export default SubGroupsManagement;
