import React from 'react'
import { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.css';

const Login = ({loginData}) => {

    const [email,setEmail] = useState();
    const [password,setPassword] = useState();

    function Verification(){
        if(loginData.email == email && loginData.password == password) alert('Login Successful')
        else alert('Wrong Credentials')
    }

  return (
    <div>
         <h2>LOGIN FORM</h2>
         <br />
      <form>
  <div class="form-group">
    <label for="exampleInputEmail1">Email address</label>
    <input  onChange = {(e)=>setEmail(e.target.value)} type="email" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Enter email" />
    <small id="emailHelp" class="form-text text-muted">We'll never share your email with anyone else.</small>
  </div>
  <div class="form-group">
    <label for="exampleInputPassword1">Password</label>
    <input  onChange = {(e)=>setPassword(e.target.value)} type="password" class="form-control" id="exampleInputPassword1" placeholder="Password" />
  </div>
  <div class="form-group form-check">
    <input type="checkbox" class="form-check-input" id="exampleCheck1" />
    <label class="form-check-label" for="exampleCheck1">Check me out</label>
  </div>
  <button type="submit" class="btn btn-primary" onClick={Verification}>Login</button>
</form>
    </div>
  )
}

export default Login
