import { useState } from "react";
import axios from "axios";
import { useDispatch } from "react-redux";
import { login } from "../store/slice/userSlice";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const dispatch = useDispatch();

  const handleLogin = async () => {
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
      dispatch(
        login({
          email: response.data.user.email,
          id: response.data.user.id,
          token: response.data.token,
        }),
      );
    } catch (error) {
      console.log(error.response.data.message);
    }
  };
  return (
    <>
      <h1>Login</h1>

      <input type="email" onChange={(e) => setEmail(e.target.value)} />
      <input type="text" onChange={(e) => setPassword(e.target.value)} />
      <button onClick={handleLogin}>Login</button>
    </>
  );
};
export default Login;
