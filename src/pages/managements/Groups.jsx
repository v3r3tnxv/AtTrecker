// client/src/pages/managents/Groups.jsx

import React, { useEffect, useState } from "react";
import api from "../../api";
import TableSearch from "../../components/TableSearch";
import AddForm from "../../components/AddForm";
import Modal from "../../components/layouts/Modal";
import Button from "../../components/Button";

const GroupsManagement = () => {
  const [groups, setGroups] = useState([]);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedGroups, setSelectedGroups] = useState([]);

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

  const handleAddGroup = async (group) => {
    try {
      const response = await api.post("/groups", group);
      setGroups([...groups, response.data]);
      setIsModalOpen(false);
    } catch (error) {
      console.error("Error adding group", error);
    }
  };

  const handleDeleteGroups = async () => {
    try {
      await api.delete("/groups", { data: { ids: selectedGroups } });
      setGroups(groups.filter((group) => !selectedGroups.includes(group.group_id)));
      setSelectedGroups([]);
    } catch (error) {
      console.error("Error deleting groups", error);
    }
  };

  const columns = [
    { header: "Идентификатор", field: "group_id" },
    { header: "Название группы", field: "group_name" },
  ];

  const fields = [{ name: "group_name", label: "Название группы" }];

  return (
    <main className="container">
      <h1>Группы</h1>
      <Button className="button" onClick={() => setIsModalOpen(true)}>
        + Добавить
      </Button>
      <Button
        className="button"
        onClick={handleDeleteGroups}
        disabled={selectedGroups.length === 0}
      >
        Удалить выбранные
      </Button>
      <TableSearch
        data={groups}
        columns={columns}
        selectedItems={selectedGroups}
        setSelectedItems={setSelectedGroups}
      />
      <Modal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)}>
        <AddForm fields={fields} onSubmit={handleAddGroup} />
      </Modal>
    </main>
  );
};

export default GroupsManagement;
