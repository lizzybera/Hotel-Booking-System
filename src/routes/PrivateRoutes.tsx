import React, { PropsWithChildren } from 'react'
import { useSelector } from 'react-redux'
import { Navigate } from 'react-router-dom'

const PrivateRoutes : React.FC<PropsWithChildren> = ({children}) => {
    const user = useSelector((state : any) => state.user)
    
  return (
    <div>
        {
            user? <div> {children} </div>  : <Navigate to="/signIn" />
             
        }
    </div>
  )
}

export default PrivateRoutes