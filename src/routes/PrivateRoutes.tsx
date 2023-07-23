import React, { PropsWithChildren } from 'react'
import { useSelector } from 'react-redux'
import { Navigate } from 'react-router-dom'

const PrivateRoutes : React.FC<PropsWithChildren> = ({children}) => {
    const user = useSelector((state : any) => state.user)
    
  return (
    <div>
        {
            user?  <Navigate to="/signIn" /> : 
             <div> {children} </div>
        }
    </div>
  )
}

export default PrivateRoutes