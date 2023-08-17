import "./Login.css"

import Template from "../../components/Template/Template"
import loginImg from "../../assets/images/login.jpg"

const Login = ({setIsLoggedIn}) => {
  
  return (

    <Template
      title="Welcome to Smart Learn"
      desc1="Learn and earn with our comprehensive online courses."
      desc2="Explore a wide range of subjects and enhance your knowledge."
      image={loginImg}
      formType="login"
      setIsLoggedIn={setIsLoggedIn}
    />
  )
}

export default Login