import React, { useState } from "react";
import { Link } from "react-router-dom";
import Input from "../components/Input";
import Button from "../components/Button";

function RecoveryPasswordPage() {
  return (
    <main className='container'>
      <h1>Восстановление пароля</h1>
      <h2>Пожалуйста, введите адрес эл. почты</h2>
      <form>
        <Input type='mail' id='username' value='' label='Имя пользователя или Email:' />

        <Button className='button' type='submit'>
          Восстановить
        </Button>

        <Link to={"/login"}>На страницу входа</Link>
      </form>
    </main>
  );
}

export default RecoveryPasswordPage;
