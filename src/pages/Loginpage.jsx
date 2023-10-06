import React, { useState } from 'react'

function Loginpage() {
  const[username, setUsername]=useState("");
  const[Password, setPassword]=useState("");
  const[valid,setValid]=useState(false);
  const handleSubmit=()=>{
    if(username==="abc" && Password==="123"){
      setValid(true);
    }

  }
 
  return (

    {}
    
    <div>
      <form>
        <label htmlFor="username">Username </label>
        <input className='border-4' type="text" name="username" onchange={(e)=>setUsername(e.target.value)} />

        <label>Password</label>
        <input className='border-4' type="text" name="password" onchange={(e)=>setPassword(e.target.value)} />
      <button onClick={handleSubmit}>submit</button>
      </form>
    </div>

  )

}

export default Loginpage