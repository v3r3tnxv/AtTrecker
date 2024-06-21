// client/src/managents/Users.jsx

import React, { useEffect, useState } from "react";
import api from "../../api";
import EntityTable from "../../components/EntityTable";

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
    // Добавьте другие поля, если необходимо
  ];

  return (
    <main className="container">
      <h1>Пользователи</h1>
      <EntityTable data={users} columns={columns} />
    </main>
  );
};

export default UsersManagement;

