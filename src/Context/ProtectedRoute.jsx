// import React from 'react'

import toast from "react-hot-toast"
import { ContextData } from "./useContext"
import { Navigate } from "react-router-dom"

// eslint-disable-next-line react/prop-types
const ProtectedRoute = ({children}) => {
    const {user, token} = ContextData()
    if(!user || !token){
        toast.error("You are not logged in !")
        return <Navigate to="/login"/>
    }

    return children;
}

export default ProtectedRoute