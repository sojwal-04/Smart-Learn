import "./SignUp.css"

import Template from "../../components/Template/Template"
import signUpImg from "../../assets/images/signup.avif"

const SignUp = ({setIsLoggedIn}) => {
  return (
    <Template
      title="Join Smart Learn Today!"
      desc1="Ignite Your Learning Journey"
      desc2="Discover and Learn with Smart Learn. Explore diverse courses and grow personally and professionally."
      image={signUpImg}
      formType="signup"
      setIsLoggedIn={setIsLoggedIn}
    />
  )
}

export default SignUp