// components/LoginForm.js
'use client'
import { FormEvent, useState } from "react";

const LoginForm = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleLogin = (e:FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    // Add your login logic here, such as sending a request to an authentication API.
    console.log("Logging in with:", email, password);
  };

  return (
    <div className="flex justify-center items-center p-32 bg-slate-200">
      <form
        className="bg-white p-8 shadow-md rounded-md w-1/3"
        onSubmit={handleLogin}
      >
        <h2 className="text-2xl font-semibold mb-4">Login</h2>
        <div className="mb-4">
          <label
            htmlFor="email"
            className="block text-gray-600 text-sm font-medium mb-2"
          >
            Email Address
          </label>
          <input
            type="email"
            id="email"
            name="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="w-full border p-2 rounded-md focus:outline-none focus:border-blue-500"
            required
          />
        </div>
        <div className="mb-4">
          <label
            htmlFor="password"
            className="block text-gray-600 text-sm font-medium mb-2"
          >
            Password
          </label>
          <input
            type="password"
            id="password"
            name="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className="w-full border p-2 rounded-md focus:outline-none focus:border-blue-500"
            required
          />
        </div>
        <button
          type="submit"
          className="w-full bg-summerSky text-white p-2 rounded-md focus:outline-none"
        >
          Log In
        </button>
      </form>
    </div>
  );
};

export default LoginForm;
