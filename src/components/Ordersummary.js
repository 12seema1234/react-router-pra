import React from 'react'
import { useNavigate } from 'react-router-dom'


export const Ordersummary = () => {
  const navigate = useNavigate()
  return (
    <>
    <div>order</div>
    <button onClick={() => navigate(-1)}>Go Back</button>
    </>
  )
}
