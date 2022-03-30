// import React from 'react'

// export const Userdetails = () => {
//   return (
//     <div>Details about user
//     </div>
//   )
// }

//URL params example


import { useParams } from "react-router-dom";
import React from 'react'

export const Userdetails = () => {
  //  const params = useParams()
  //  const userId = params.userId
  //destruring 
  const {userId} = useParams()
  return (
    <div>Details about users{userId}</div>
  )
}
