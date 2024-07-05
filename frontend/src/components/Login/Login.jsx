import React, {useContext,useState } from 'react'
import './Login.css'
import { assets } from '../../assets/assets'
import { Storecontext } from '../../context/Storecontext'
import axios from 'axios'
const Login = ({ setshowLogin }) => {
  const [currstate, setcurrstate] = useState("Login")
  const { url, setToken } = useContext(Storecontext)

  const [data, setData] = useState({
    name: "",
    email: "",
    password: ""
  })

  const onChangeHandler = (event) => {
    const name = event.target.name;
    const value = event.target.value;
    setData(data => ({ ...data, [name]: value }))
  }
  const OnLogin = async (event) => {
    event.preventDefault()
    let newUrl = url;
    if (currstate === "Login") {
      newUrl += "/api/user/login"
    }
    else {
      newUrl += "/api/user/register"
    }
    const response = await axios.post(newUrl, data);
    if (response.data.success) {
      setToken(response.data.token);
      localStorage.setItem("token", response.data.token)
      setshowLogin(false)
    }
    else {
      alert(response.data.message)
    }


  }


  return (
    <div className='login-popup'>
      <form  onSubmit={OnLogin} className="login-popup-container">
        <div className="login-popup-title">
          <h2>{currstate}</h2>
          <img onClick={() => setshowLogin(false)} src={assets.cross_icon} alt="" />
        </div>
        <div className="login-popup-inputs">
          {currstate === "Login" ? <></> : <input name='name' onChange={onChangeHandler}  value={data.name} type="text" placeholder='Your name' required />
          }
          <input name='email' onChange={onChangeHandler} value={data.email} type="email" placeholder='Your email' required />
          <input name='password' onChange={onChangeHandler} value={data.password} type="password" placeholder='password' required />
        </div>
        <button type='submit'>{currstate === "sign up" ? "create account" : "Logiṇ"}</button>
        <div className="login-popup-condition">
          <input type="checkbox" required />
          <p>By continuing i agree to the terms of use and privacy policy</p>
        </div>
        {currstate === "Login" ? <p>Create a new account? <span onClick={() => setcurrstate("sign up")}>Click here</span></p> :
          <p>Already have an account? <span onClick={() => setcurrstate("Login")}>Login here</span></p>}


      </form>
    </div>
  )
}

export default Login
