import React, { useState } from 'react'
import { Navigate } from 'react-router-dom'

const ProtectedRoute = ({children}) => {
    const [ensayo, setEnsayo] = useState(false)

    return <>{ensayo ? children : <Navigate to="/" />}</>;
}

export default ProtectedRoute