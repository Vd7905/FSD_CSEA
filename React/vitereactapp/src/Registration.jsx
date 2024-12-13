import React, { useState } from 'react'

function Registration({regdata}){
    const [myName,setName] = useState();
    const [email,setEmail] = useState();
    const [password,setPassword] = useState();
  
    function doRegistration(e){
        e.preventDefault();
        const objectData={
            myName,
            email,
            password
        };

      regdata(objectData);
    }

  return (
    <div>
     <h2>REGISTRATION FORM</h2>
     <br />
      <form>
      <div class="form-group">
    <label for="exampleInputEmail">Name</label>
    <input onChange = {(e)=>setName(e.target.value)} type="text" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Enter name"/>
    <small id="emailHelp" class="form-text text-muted">We'll never share your email with anyone else.</small>
    </div>

  <div class="form-group">
    <label for="exampleInputEmail1">Email address</label>
    <input onChange = {(e)=>setEmail(e.target.value)} type="email" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Enter email" />
    <small id="emailHelp" class="form-text text-muted">We'll never share your email with anyone else.</small>
  </div>
  <div class="form-group">
    <label for="exampleInputPassword1">Password</label>
    <input onChange = {(e)=>setPassword(e.target.value)} type="password" class="form-control" id="exampleInputPassword1" placeholder="Password" />
  </div>
  <div class="form-group form-check">
    <input  type="checkbox" class="form-check-input" id="exampleCheck1" />
    <label class="form-check-label" for="exampleCheck1">Check me out</label>
  </div>
  <button type="submit" class="btn btn-primary" onClick={doRegistration}>Register</button>
</form>
    </div>
  )
}

export default Registration
