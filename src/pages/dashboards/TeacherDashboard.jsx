// client/src/components/TeacherDashboard.jsx

import React from "react";

function TeacherDashboard() {
  return (
    <main className="container">
      <h1>Панель преподавателя</h1>
      <nav>
        <Link to="/attendance">Управление посещаемостью</Link>
      </nav>
    </main>
  );
}

export default TeacherDashboard;
