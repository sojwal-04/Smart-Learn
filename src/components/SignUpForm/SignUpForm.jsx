import "./SignUpForm.css"

import { useState } from "react";
import toast from "react-hot-toast";
import { AiOutlineEye, AiOutlineEyeInvisible } from "react-icons/ai";
import { useNavigate } from "react-router-dom";

const SignUpForm = ({ setIsLoggedIn }) => {

  const navigate = useNavigate();

  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);


  const [accountType, setAccountType] = useState('student');

  const [inputs, setInputs] = useState(
    {
      firstName: "",
      lastName: "",
      email: "",
      password: "",
      confirmPassword: "",
    }
  );


  const handleChange = (e) => {
    setInputs((prev) => (
      { ...prev, [e.target.name]: e.target.value }
    ))
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (inputs.password !== inputs.confirmPassword) {
      toast.error("Passwords do not match");
      return;

    }
    const updatedInputs = { ...inputs, accountType: accountType };
    setInputs(updatedInputs);

    setIsLoggedIn(true);

    toast.success("Account Created");
    // console.log("printing user");
    // console.log(updatedInputs);
    navigate("/dashboard")
  }

  return (
    <div>

      <div className="student-instructor-buttons">
        <button
          className={`${accountType === 'student' ? "type-btn-click" : "type-btn"}`}
          onClick={() => setAccountType("student")}>
          Student
        </button>
        <button
          className={`${accountType === 'instructor' ? "type-btn-click" : "type-btn"}`}
          onClick={() => setAccountType("instructor")}>
          Instructor
        </button>
      </div>

      <form onSubmit={handleSubmit} className="form">
        {/* Name Field */}
        <div className="name-field">
          <label className="outer-label">
            <p className="input-field-name">

              First Name<sup>*</sup>
            </p>
            <input
              className="input-field"
              required
              type="text"
              name="firstName"
              value={inputs.firstName}
              placeholder="First Name"
              onChange={handleChange}
            />
          </label>

          <label className="outer-label">
            <p className="input-field-name">
              Last Name<sup>*</sup>
            </p>
            <input
              className="input-field"
              required
              type="text"
              name="lastName"
              value={inputs.lastName}
              placeholder="Last Name"
              onChange={handleChange}
            />
          </label>
        </div>

        {/* Email */}
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

        {/* Password */}
        <div className="password-field">

          <label className="outer-label">
            <p className="input-field-name">
              Create Password <sup>*</sup>
            </p>
            <input
              className="input-field"
              required
              type={showPassword ? "text" : "password"}
              name="password"
              value={inputs.password}
              onChange={handleChange}
              placeholder="Create password"
            />
            <span
              className="password-visibility"
              onClick={() => setShowPassword(!showPassword)}
            >
              {
                showPassword
                  ?
                  <AiOutlineEyeInvisible className="password-visibility-icon" />
                  :
                  <AiOutlineEye className="password-visibility-icon" />
              }
            </span>

          </label>

          <label className="outer-label">
            <p className="input-field-name">
              Confirm Password <sup>*</sup>
            </p>
            <input
              className="input-field"
              required
              type={showConfirmPassword ? "text" : "password"}
              name="confirmPassword"
              value={inputs.confirmPassword}
              onChange={handleChange}
              placeholder="Confirm password"
            />
            <span
              className="password-visibility"
              onClick={() => setShowConfirmPassword(!showConfirmPassword)}
            >
              {
                showConfirmPassword
                  ?
                  <AiOutlineEyeInvisible className="password-visibility-icon" />
                  :
                  <AiOutlineEye className="password-visibility-icon" />
              }
            </span>

          </label>
        </div>

        <button className="create-account">
          Create Account
        </button>

      </form>

    </div>
  )
}

export default SignUpForm