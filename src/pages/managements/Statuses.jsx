// client/src/pages/managents/Statuses.jsx

import React, { useEffect, useState } from "react";
import api from "../../api";
import TableSearch from "../../components/TableSearch";
import Input from "../../components/Input";
import Button from "../../components/Button";
import Modal from "../../components/layouts/Modal";

const StatusesManagement = () => {
  const [statuses, setStatuses] = useState([]);
  const [newStatusName, setNewStatusName] = useState("");
  const [newStatusShortName, setNewStatusShortName] = useState("");
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedStatuses, setSelectedStatuses] = useState([]);

  useEffect(() => {
    fetchStatuses();
  }, []);

  const fetchStatuses = async () => {
    try {
      const response = await api.get("/statuses");
      setStatuses(response.data);
    } catch (error) {
      console.error("Error fetching statuses", error);
    }
  };

  const handleAddStatus = async () => {
    try {
      const response = await api.post("/statuses", {
        status_name: newStatusName,
        status_short_name: newStatusShortName,
      });
      setStatuses([...statuses, response.data]);
      setNewStatusName("");
      setNewStatusShortName("");
      setIsModalOpen(false);
    } catch (error) {
      console.error("Error adding status", error);
    }
  };

  const handleDeleteStatuses = async () => {
    try {
      await api.delete("/statuses", { data: { ids: selectedStatuses } });
      setStatuses(statuses.filter((status) => !selectedStatuses.includes(status.status_id)));
      setSelectedStatuses([]);
    } catch (error) {
      console.error("Error deleting statuses", error);
    }
  };

  const columns = [
    { header: "Идентификатор", field: "status_id" },
    { header: "Название", field: "status_name" },
    { header: "Сокращенное название", field: "status_short_name" },
  ];

  return (
    <main className="container">
      <h1>Статусы</h1>
      <Button className="button" onClick={() => setIsModalOpen(true)}>
        Добавить статус
      </Button>
      <Button
        className="button"
        onClick={handleDeleteStatuses}
        disabled={selectedStatuses.length === 0}
      >
        Удалить выбранные
      </Button>
      <TableSearch
        data={statuses}
        columns={columns}
        selectedItems={selectedStatuses}
        setSelectedItems={setSelectedStatuses}
      />
      <Modal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)}>
        <h2>Добавить статус</h2>
        <Input
          type="text"
          value={newStatusName}
          onChange={(e) => setNewStatusName(e.target.value)}
          placeholder="Введите название статуса"
        />
        <Input
          type="text"
          value={newStatusShortName}
          onChange={(e) => setNewStatusShortName(e.target.value)}
          placeholder="Введите сокращенное название статуса"
        />
        <Button className="button" onClick={handleAddStatus}>
          Добавить
        </Button>
      </Modal>
    </main>
  );
};

export default StatusesManagement;
