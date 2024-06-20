import React from "react";
import { Link } from "react-router-dom";
import brand from "../images/ssu-logotype.png";

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
            <Link to='/services'>Дисциплины</Link>
          </li>

          <li className='global-header__nav-item'>
            <Link to='/contact'>Календарь</Link>
          </li>

          <li className='global-header__nav-item'>
            <Link to='/contact'>Отчет</Link>
          </li>
        </ul>

        <ul className='global-header__account-list'>
          <li className='global-header__account-item'>
            <Link to='/contact'>Логин пользователя</Link>
          </li>

          <li className='global-header__account-item'>
            <Link to='/login'>Выйти</Link>
          </li>
        </ul>
      </nav>
    </header>
  );
}

export default Header;
