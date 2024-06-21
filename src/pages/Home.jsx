// client/src/components/HomePage.jsx

import React from "react";
import { Link } from "react-router-dom";

function HomePage() {
  return (
    <main className="container">
      <h1>Главная страница</h1>
      <p>Добро пожаловать в систему учета посещаемости студентов!</p>
      <nav>
        <Link to="/login">Вход</Link> | <Link to="/registration">Регистрация</Link>
      </nav>
    </main>
  );
}

export default HomePage;
