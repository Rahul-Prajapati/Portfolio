import { message } from 'antd';
import React, { useState } from 'react'

const Login = () => {
  const [user, setUser] = useState({
    username: "",
    password: "",
  });

  const handleChange = (e) => {

    setUser({
      ...user,
      [e.target.id]: e.target.value,

    });
  }

  const login = async (e) => {
    e.preventDefault();
    try {
      const response = await fetch("/api/portfolio/admin-login", {
        method: 'POST',
        mode: 'no-cors',
        headers: {
          'Content-Type': 'application/json',
          "Access-Control-Allow-Origin": "*",
        },
        body: JSON.stringify(user),
      });

      if (response.data.success) {
        message.success(response.data.message);
        localStorage.setItem("token", JSON.stringify(response.data));
        window.location.href = "./admin";
      }
      else {
        message.error(response.data.message);
      }
    }
    catch (error) {
      message.error(error.message);
    }
  }
  return (
    <div className='bg-primary items-center justify-center '>
      <div
        className='p-3 mx-auto max-w-lg h-screen'>
        <h1
          className='text-3xl text-center font-bold gap-2 text-white'>
          Login
        </h1>
        <form
          className='flex flex-col gap-1 p-4'
          onSubmit={
            login
          }
        >
          <input
            type="username"
            placeholder='username'
            id='username'
            className='border p-3 rounded-lg '
            onChange={handleChange}
          />
          <input
            type="password"
            placeholder='password'
            id='password'
            className='border p-3 rounded-lg'
            onChange={handleChange}
          />
          <button
            className='text-slate-800 rounded-lg border p-3 bg-green-800 hover:opacity-90'
            type='submit'>
            Login
          </button>
        </form>
        <div
          className='flex ml-5 cursor-pointer '

        >
        </div>

      </div>


    </div>
  )

}
export default Login