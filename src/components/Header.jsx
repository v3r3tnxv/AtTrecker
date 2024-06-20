import React from "react";
import { Link, useLocation, Navigate } from "react-router-dom";
import brand from "../images/ssu-logotype.png";
import Button from "../components/Button";

function Header() {
  return (
    <header className='global-header container'>
      <div className='global-header__brand'>
        <Link to='/home'>
          <img className='global-header__brand-img' src={brand} alt='Логотип СГУ' />
        </Link>
      </div>

      <nav className='global-header__nav'>
        <ul className='global-header__nav-list'>
          <li className='global-header__nav-item'>
            <Link to='/home'>Главная</Link>
          </li>

          <li className='global-header__nav-item'>
            <Link to='/subjects'>Дисциплины</Link>
          </li>

          <li className='global-header__nav-item'>
            <Link to='/contact'>Отчет</Link>
          </li>
        </ul>

        <ul className='global-header__account-list'>
          <li className='global-header__account-item'>
            <span>{""}</span> {/* Отображение имени пользователя */}
          </li>

          <li className='global-header__account-item'>
            <Button onClick={""}>Выйти</Button>
          </li>
        </ul>
      </nav>
    </header>
  );
}

export default Header;
