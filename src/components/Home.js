import React from 'react'
import {useNavigate} from "react-router-dom"

function Home() {
   const navigate =useNavigate()
  return (
    <div>
    <div>Home page</div>
    <button onClick={() => navigate('order-summary', {replace:true})}>Place order: ;
    </button></div>
  )
}

export default Home