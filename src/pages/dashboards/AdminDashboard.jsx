// client/src/components/AdminDashboards.jsx

import React from "react";

function AdminDashboard() {
  return (
    <main className="container">
      <h1>Панель администратора</h1>
      <nav>
        <Link to="/user-management">Управление пользователями</Link>
        <Link to="/group-management">Управление группами</Link>
        <Link to="/schedule-management">Управление расписанием</Link>
      </nav>
    </main>
  );
}

export default AdminDashboard;

