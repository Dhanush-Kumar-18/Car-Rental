import { useState } from "react";
import { useNavigate } from "react-router-dom";

export default function Signup() {
  const navigate = useNavigate();

  const [form, setForm] = useState({
    name: "",
    email: "",
    password: ""
  });

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSignup = () => {
    if (!form.name || !form.email || !form.password) {
      alert("All fields required");
      return;
    }

    localStorage.setItem("user", JSON.stringify(form));
    alert("Signup successful");
    navigate("/login");
  };

  return (
    <div className="auth-page">
      <h2>Sign Up</h2>

      <input
        type="text"
        name="name"
        placeholder="Name"
        onChange={handleChange}
      />

      <input
        type="email"
        name="email"
        placeholder="Email"
        onChange={handleChange}
      />

      <input
        type="password"
        name="password"
        placeholder="Password"
        onChange={handleChange}
      />

      <button onClick={handleSignup}>Create Account</button>
    </div>
  );
}
