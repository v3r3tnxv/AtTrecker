// client/src/components/layouts/Header.jsx

import React from "react";
import { Link, NavLink } from "react-router-dom";
import brand from "../../images/ssu-logotype.png";
import Button from "../Button";

function Header() {
  return (
    <header className="global-header ">
      <div className="global-header__brand">
        <Link to="/home">
          <img className="global-header__brand-img" src={brand} alt="Логотип СГУ" />
        </Link>
      </div>

      <nav className="global-header__nav">
        <ul className="global-header__nav-list">
          <li className="global-header__nav-item">
            <Link to="/home">Главная</Link>
          </li>

          {/* Пункт "Управление" с выпадающим списком */}
          <li className="global-header__nav-item dropdown">
            <span className="dropdown-toggle">Управление</span>
            <ul className="dropdown-menu">
              <li>
                <NavLink to="/groups-management">Группы</NavLink>
              </li>
              <li>
                <NavLink to="/subjects-management">Дисциплины</NavLink>
              </li>
              <li>
                <NavLink to="/lessons-management">Занятия</NavLink>
              </li>
              <li>
                <NavLink to="/subgroups-management">Подгруппы</NavLink>
              </li>
              <li>
                <NavLink to="/users-management">Пользователи</NavLink>
              </li>
              <li>
                <NavLink to="/attendance-management">Посещаемость</NavLink>
              </li>
              <li>
                <NavLink to="/teachers-management">Преподаватели</NavLink>
              </li>
              <li>
                <NavLink to="/statuses-management">Статусы</NavLink>
              </li>
              <li>
                <Link to="/students-management">Студенты</Link>
              </li>
            </ul>
          </li>

          <li className="global-header__nav-item">
            <Link to="/attendance-report">Отчет по посещаемости</Link>
          </li>
        </ul>

        <ul className="global-header__account-list">
          <li className="global-header__account-item">
            <Link to="/user-profile">
              <span>Имя пользователя{/* Отображение имени пользователя */}</span>
            </Link>
          </li>

          <li className="global-header__account-item">
            <Button onClick={() => {}}>Выйти</Button>
          </li>
        </ul>
      </nav>
    </header>
  );
}

export default Header;


