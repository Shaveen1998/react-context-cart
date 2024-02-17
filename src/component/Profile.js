import React, { useContext } from 'react'
import { loginContext } from '../context/LoginContext'

function Profile() {


    const {userName} = useContext(loginContext)
  return (
    <div>
      <h1>Profile: {userName}</h1>
    </div>
  )
}

export default Profile
