import React, { useState } from "react";
import Input from "../components/Input";
import Button from "../components/Button";

function LoginPage() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    // Здесь можно добавить логику обработки формы
    console.log("Имя пользователя:", username);
    console.log("Пароль:", password);
  };

  return (
    <main className='container'>
      <h1>Вход в систему</h1>
      <h2>Пожалуйста, введите свои данные</h2>
      <form onSubmit={handleSubmit}>
        <Input
          type='text'
          id='username'
          value={username}
          onChange={(e) => setUsername(e.target.value)}
          label='Имя пользователя или Email:'
        />

        <Input
          type='password'
          id='password'
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          label='Пароль:'
        />

        <Button className='button' type='submit'>
          Войти
        </Button>
      </form>
    </main>
  );
}

export default LoginPage;
