import React, { useEffect } from 'react'
import { useDispatch } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import { logout } from '../redux/authSlice'

const Logout = () => {
    const navigate = useNavigate()
    const dispatch = useDispatch()
    
    useEffect(() => {
        setTimeout(() => {
            navigate("/")
        },"2000");
    
        dispatch(logout())
    },[])

    return <p>Logging out, Please Wait....</p>
}

export default Logout