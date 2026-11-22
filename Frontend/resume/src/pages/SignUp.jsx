import axios from "axios";
import { useState } from "react";
const SignUp = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const Register = async () => {
    try {
      const response = await axios.post(
        "http://localhost:3000/api/user/signUp",
        {
          email: email,
          password: password,
        },
      );
      console.log(response.data);
    } catch (error) {
      console.log(error.response.data.message);
    }
  };
  return (
    <>
      <h1>Register</h1>
      <input type="email" onChange={(e) => setEmail(e.target.value)} />
      <input type="text" onChange={(e) => setPassword(e.target.value)} />
      <button onClick={Register}>Register</button>
    </>
  );
};
export default SignUp;
