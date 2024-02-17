import React, { useContext, useState } from 'react'
import { loginContext } from '../context/LoginContext'

function Login() {

  
    const [password,setPassword] = useState("")
    const {setUsername,userName,profile,setProfile} = useContext(loginContext)
   
    

const submitHandler = (e)=>{
    e.preventDefault()

    setProfile(true)
}
  return (
    
 
   <div>
          <form className='form' onSubmit={submitHandler}>
        <label>UserName: </label>
        <input type="text" onChange={(e)=>{setUsername(e.target.value)}} value={userName}/>

        <label>Password: </label>
        <input type="text" onChange={(e)=>{setPassword(e.target.value)}} value={password}/>

        <button>Log in</button>

   </form>

   <p> UserName: {profile}</p>

   </div>
   
  )
}

export default Login
