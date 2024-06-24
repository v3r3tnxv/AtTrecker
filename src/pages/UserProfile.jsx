// client/src/pages/UserProfilePage.jsx

import React, { useEffect, useState } from "react";
import api from "../api";
import TableSearch from "../components/TableSearch";
import Modal from "../components/layouts/Modal";
import Input from "../components/Input";
import Button from "../components/Button";

const UserProfilePage = () => {
  const [users, setUsers] = useState([]);
  const [isNewUserModalOpen, setIsNewUserModalOpen] = useState(false);
  const [selectedUsers, setSelectedUsers] = useState([]);
  const [newUserLogin, setNewUserLogin] = useState("");
  const [newUserPassword, setNewUserPassword] = useState("");
  const [newUserRole, setNewUserRole] = useState("");

  useEffect(() => {
    fetchUsers();
  }, []);

  const fetchUsers = async () => {
    try {
      const response = await api.get("/users");
      setUsers(response.data);
    } catch (error) {
      console.error("Error fetching users", error);
    }
  };

  const handleAddUser = async () => {
    try {
      const response = await api.post("/users", {
        user_login: newUserLogin,
        user_password: newUserPassword,
        role_id: newUserRole,
      });
      setUsers([...users, response.data]);
      setIsNewUserModalOpen(false);
      setNewUserLogin("");
      setNewUserPassword("");
      setNewUserRole("");
    } catch (error) {
      console.error("Error adding user", error);
    }
  };

  const handleDeleteUsers = async () => {
    try {
      await api.delete("/users", { data: { ids: selectedUsers } });
      setUsers(users.filter((user) => !selectedUsers.includes(user.user_id)));
      setSelectedUsers([]);
    } catch (error) {
      console.error("Error deleting users", error);
    }
  };

  const columns = [
    { header: "Идентификатор", field: "user_id" },
    { header: "Логин", field: "user_login" },
    { header: "Роль", field: "role_name" },
  ];

  return (
    <main className="container">
      <h1>Пользователи</h1>
      <Button className="button" onClick={() => setIsNewUserModalOpen(true)}>
        + Добавить пользователя
      </Button>
      <Button className="button" onClick={handleDeleteUsers} disabled={selectedUsers.length === 0}>
        Удалить выбранных пользователей
      </Button>
      <TableSearch
        data={users}
        columns={columns}
        selectedItems={selectedUsers}
        setSelectedItems={setSelectedUsers}
      />
      <Modal isOpen={isNewUserModalOpen} onClose={() => setIsNewUserModalOpen(false)}>
        <h2>Добавить пользователя</h2>
        <Input
          type="text"
          value={newUserLogin}
          onChange={(e) => setNewUserLogin(e.target.value)}
          placeholder="Введите логин пользователя"
        />
        <Input
          type="password"
          value={newUserPassword}
          onChange={(e) => setNewUserPassword(e.target.value)}
          placeholder="Введите пароль пользователя"
        />
        <Input
          type="text"
          value={newUserRole}
          onChange={(e) => setNewUserRole(e.target.value)}
          placeholder="Введите ID роли пользователя"
        />
        <Button className="button" onClick={handleAddUser}>
          Добавить
        </Button>
      </Modal>
    </main>
  );
};

export default UserProfilePage;
