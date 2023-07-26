import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { login } from '../redux/authSlice';
import { useLocation, useNavigate } from 'react-router-dom';

const Login = () => {
    const {data, isAuthenticated, error, loading} = useSelector((state) => state.auth)
    const [validation, setValidation] = useState(true)
    const dispatch = useDispatch();
    let location = useLocation();
    const navigate = useNavigate();
    const redirect = location?.state?.from?.pathname
    const [spinner, setSpinner] = useState(false)
    const [user, setUser] = useState({
        username: '',
        password: ''
    })

    const handleSubmit = (e) => {
        e.preventDefault()
        
        if(user.username === '' || user.password === '') {
            setValidation(false)
            return;
        }
        
        dispatch(login(user))
        setSpinner(true)
        setTimeout(()=> {
            console.log(`Login - ${data},${isAuthenticated},${error},${loading} `)
            console.log(`Redirecting To: ${redirect} for further varification`)
            if(redirect) {
                navigate(redirect)
            } else {
                navigate("/")
            }
        },"2000")
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
                    { error ? <p>{error}</p> : ''}
                    { spinner ? (
                        <div className="d-flex justify-content-center">
                            <div className="spinner-border" style={{width: "3rem", height: "3rem"}} role="status">
                            <span className="visually-hidden">Loading...</span>
                            </div>
                        </div>
                    ) : ''}
                    {validation ? '' : <p style={{color: "red"}}>Inputs are not valid</p>}
                    <div className='p-2 form-group'>
                        <label htmlFor='username'>Username</label>
                        <input type='username' className='form-control' id='username' onChange={handleChange} />
                    </div>
                    <div className='p-2 form-group'>
                        <label htmlFor='password'>Password</label>
                        <input type='password' className='form-control' id='password' onChange={handleChange} />
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