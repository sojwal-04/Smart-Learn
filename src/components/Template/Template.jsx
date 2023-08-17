import LoginForm from "../LoginForm/LoginForm"
import SignUpForm from "../SignUpForm/SignUpForm"

const Template = ({ title, desc1, desc2, image, formType, setIsLoggedIn }) => {
  return (
    <div className="template-container">

      <div className="left">
        <h1>{title}</h1>
        <p>
          <span>{desc1}</span>
          <span>{desc2}</span>
        </p>


        {
          formType === "signup"
            ?
            <SignUpForm setIsLoggedIn={setIsLoggedIn} />
            : <LoginForm setIsLoggedIn={setIsLoggedIn} />
        }

        <div>
          <div></div>
          <p>OR</p>
          <div></div>
        </div>

        <button>
          <p>Sign Up With Google</p>
        </button>
      </div>

      <div className="right">
        <img src={image} className="image" loading="lazy" />
        <div className="background"></div>
      </div>
    </div>
  )
}

export default Template