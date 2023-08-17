import "./Template.css"

import LoginForm from "../LoginForm/LoginForm"
import SignUpForm from "../SignUpForm/SignUpForm"
import {FcGoogle} from 'react-icons/fc'

const Template = ({ title, desc1, desc2, image, formType, setIsLoggedIn }) => {

  return (
    <div className="template-container ">

      <div className="left-container">
        <h1 className="title">{title}</h1>
        <p className="desc">
          <span>{desc1}</span>
          <br />
          <span>{desc2}</span>
        </p>

        {/* Form */}
        {
          formType === "signup"
            ?
            <SignUpForm setIsLoggedIn={setIsLoggedIn} />
            : <LoginForm setIsLoggedIn={setIsLoggedIn} />
        }

        <div className="horizontal">
          <div className="line"></div>
          <p>OR</p>
          <div className="line"></div>
        </div>

        <button className="sign-btn">
          <FcGoogle/>
          <p>Sign Up With Google</p>
        </button>
      </div>

      <div className="right-container">
        <img src={image} className="image" loading="lazy" />
        {/* <div className="background"></div> */}
      </div>

    </div>
  )
}

export default Template