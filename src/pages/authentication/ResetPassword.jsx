// client/src/components/ResetPasswordPage.jsx

import React, { useState } from "react";
import { Link } from "react-router-dom";
import Input from "../../components/Input";
import Button from "../../components/Button";

function ResetPasswordPage() {
  return (
    <main className="container">
      <h1>Восстановление пароля</h1>
      <h2>Пожалуйста, введите адрес эл. почты</h2>
      <form>
        <Input type="password" id="password" value="" label="Навый пароль:" />

        <Input type="password" id="password" value="" label="Повторите пароль:" />

        <Button className="button" type="submit">
          Сбросить пароль
        </Button>

        <Link to={"/login"}>На страницу входа</Link>
      </form>
    </main>
  );
}

export default ResetPasswordPage;
