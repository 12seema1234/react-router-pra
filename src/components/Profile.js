import React from 'react'
import { useAuth } from './Auth'
 import { useNavigate } from 'react-router-dom'

export const Profile = () => {
    const auth = useAuth()
    const navigate = useNavigate()
    const handlelogout = ()=> {
        auth.logout()
        navigate('/')
    }
  return (
    <div>
    <div>Welcome {auth.user}</div>
    <button onClick={handlelogout}>Logout</button>
    
    </div>
    
  )
}
