import React, { useState } from 'react'
import { useDispatch } from 'react-redux';
import { login } from '../redux/authSlice';
import { useNavigate } from 'react-router-dom';

const Login = () => {
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const [user, setUser] = useState({
        username: '',
        password: ''
    })

    const handleSubmit = (e) => {
        e.preventDefault()
        dispatch(login(user))
        navigate('/')
    }

    const handleChange = (e) => {
        setUser({
            ...user,
            [e.target.id]: e.target.value
        })
    }

    return (
        <div className='container'>
            <div className='mt-5 d-flex justify-content-center'>
                <form onSubmit={handleSubmit} id='login' className='w-25 p-3 d-grid gap-2'>
                    <div className='p-2 form-group'>
                        <label htmlFor='username'>Username</label>
                        <input type='username' className='form-control' id='username' placeholder='Username' onChange={handleChange} />
                    </div>
                    <div className='p-2 form-group'>
                        <label htmlFor='password'>Password</label>
                        <input type='password' className='form-control' id='password' placeholder='Password' onChange={handleChange} />
                    </div>
                    <div className='p-2 form-group form-check'>
                        <input type='submit' className='btn btn-primary' value='Submit' />
                        <input type='reset' className='ms-2 btn btn-secondary ml-2' value='Reset' />
                    </div>
                    
                </form>
            </div>
        </div>
    )
}

export default Login