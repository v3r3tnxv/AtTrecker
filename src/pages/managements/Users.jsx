// client/src/managents/Users.jsx

import React, { useEffect, useState } from "react";
import api from "../../api";
import TableSearch from "../../components/TableSearch";
import Input from "../../components/Input";
import Button from "../../components/Button";

const UsersManagement = () => {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    const fetchUsers = async () => {
      try {
        const response = await api.get("/users");
        setUsers(response.data);
      } catch (error) {
        console.error("Error fetching users", error);
      }
    };

    fetchUsers();
  }, []);

  const columns = [
    { header: "Идентификатор", field: "user_id" },
    { header: "Логин", field: "user_login" },
    { header: "Пароль", field: "user_password" },
    { header: "Роль", field: "role_name" }
  ];

  return (
    <main className="container">
      <h1>Пользователи</h1>
      <TableSearch data={users} columns={columns} />
    </main>
  );
};

export default UsersManagement;
