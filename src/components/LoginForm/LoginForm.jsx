import "./LoginForm.css"

import { useState } from "react";
import toast from "react-hot-toast";
import { AiOutlineEye, AiOutlineEyeInvisible } from "react-icons/ai"
import { Link, useNavigate } from "react-router-dom";

const LoginForm = ({ setIsLoggedIn }) => {

  const navigate = useNavigate();

  const [inputs, setInputs] = useState(
    {
      email: '',
      password: '',
    }
  );

  const [showPassword, setShowPassword] = useState(false);

  const handleChange = (e) => {
    setInputs((prev) => {
      return { ...prev, [e.target.name]: e.target.value }
    })
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    setIsLoggedIn(true);
    toast.success("Logged In");
    navigate("/dashboard");
  }

  return (
    <form
      onSubmit={handleSubmit}
      className="login-form"
    >
      <label className="outer-label">
        <p className="input-field-name">
          Email Address <sup>*</sup>
        </p>
        <input
          className="input-field"
          required
          type="email"
          name="email"
          value={inputs.email}
          onChange={handleChange}
          placeholder="Enter your email address"
        />
      </label>
      <label className="outer-label">
        <p className="input-field-name">
          Password <sup>*</sup>
        </p>
        <input
          className="input-field"
          required
          type={showPassword ? "text" : "password"}
          name="password"
          value={inputs.password}
          onChange={handleChange}
          placeholder="Enter your password"
        />
        <span
          className="password-visibility-login"
          onClick={() => setShowPassword(!showPassword)}
        >
          {
            showPassword
              ?
              <AiOutlineEyeInvisible  className="password-icon"/>
              :
              <AiOutlineEye className="password-icon" />
          }
        </span>

        <Link to="#">
          <p className="forgot-password">
            Forgot Password
          </p>
        </Link>
      </label>

      <button className="sign-in-btn">
        Sign In
      </button>

    </form>
  )
}

export default LoginForm