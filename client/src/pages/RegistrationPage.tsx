import User from "../model/User";
import { useState } from "react";
import "../styles/RegistrationPage.scss";

export default function RegistrationPage() {
  const [user, setUser] = useState<User>({});

  const handleSubmit = (e: any) => {
    e.preventDefault();
    console.log(user);
  };

  return (
    <>
      <form onSubmit={(e) => handleSubmit(e)}>
        <label htmlFor="username">Username</label>
        <input
          id="username"
          type="text"
          placeholder="enter username"
          value={user?.username}
          onChange={(e) => setUser({ ...user, username: e.target.value })}
        />
        <label htmlFor="password">Password</label>
        <input
          id="password"
          placeholder="enter password"
          value={user?.password}
          onChange={(e) => setUser({ ...user, password: e.target.value })}
        />

        <button type="submit">Create</button>
      </form>
    </>
  );
}
