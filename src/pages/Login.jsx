import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import Input from "../components/Input";
import Button from "../components/Button";

function LoginPage() {
  return (
    <main className='container'>
      <h1>Вход в систему</h1>
      <h2>Пожалуйста, введите свои данные</h2>
      <form>
        <Input type='text' id='username' value='' label='Имя пользователя или адрес эл. почты:' />

        <Input type='password' id='password' value='' label='Пароль:' />

        <Button className='button' type='submit'>
          Войти
        </Button>

        <Link to='/password-recovery'>Забыли пароль?</Link>
      </form>
    </main>
  );
}

export default LoginPage;
