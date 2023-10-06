import React, { useState } from 'react'
import Home from '../pages/Home';

function Login() {
  const[username, setUsername]=useState("");
  const[password, setPassword]=useState("");
  console.log(username+ password);
  const[valid,setValid]=useState(false);
  const handleSubmit= () => {
    if(username==="abc" && password==="123"){
      setValid(true);
    }

  }
 
  return (
    valid ? <Home /> :


    <div>
      
        <label htmlFor="username">Username </label>
        <input className='border-4' type="text" onChange={(e) => setUsername(e.target.value)} />

        <label>Password</label>
        <input className='border-4' type="text" name="password" onChange={(e) => setPassword(e.target.value)} />

      <button onClick={handleSubmit}>submit</button>
    
    </div>
  

  )

}

export default Login