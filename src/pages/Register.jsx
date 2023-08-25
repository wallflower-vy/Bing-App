import React from "react";
import Add from "../img/addAvatar.png";
import {createUserWithEmailAndPassword } from "firebase/auth";
import {auth} from "../firebase";

const Register = () => {

  const handleSubmit= async (e)=>{
    e.preventDefault()
    const displayName = console.log(e.target[0].value)
    const email = console.log(e.target[1].value)
    const password = console.log(e.target[2].value)
    const file = console.log(e.target[3].files[0])
   

   const res = await createUserWithEmailAndPassword(auth,email,password)
    .then((data) => {
      console.log(data, "authData");
      
    })
    .catch((err) => {
      console.log(err.code);
      
    });
   
  }
  return (
    <div className='formContainer'>
      <div className='formWrapper'>
      <span className="logo">Bing</span>
        <span className="title">Register</span>
        <form onSubmit={handleSubmit}>
          <input type='text' placeholder='display name' />
          <input type='email' placeholder='email' />
          <input  type='password' placeholder='password' />
          <input style={{ display: "none" }} type="file" id="file" />
          <label htmlFor="file">
            <img src={Add} alt="" /> 
            <span>Add an avatar</span>
          </label>
          <button >Sign up</button>
        </form>
        <p>
          You do have an account?
           {/* <Link to="/register"> */}
            Login
            {/* </Link> */}
        </p>
      </div>
    </div>
  );
};

export default Register;
