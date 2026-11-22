import { useState } from "react";
import axios from "axios";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const login = async () => {
    try {
      const response = await axios.post(
        "http://localhost:3000/api/user/login",
        {
          email: email,
          password: password,
        },
      );
      console.log(response);
      console.log(response.data);
    } catch (error) {
      console.log(error.response.data.message);
    }
  };
  return (
    <>
      <h1>Login</h1>

      <input type="email" onChange={(e) => setEmail(e.target.value)} />
      <input type="text" onChange={(e) => setPassword(e.target.value)} />
      <button onClick={login}>Login</button>
    </>
  );
};
export default Login;
