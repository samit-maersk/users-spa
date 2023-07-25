import React from 'react'
import { useDispatch } from 'react-redux'
import { allUsers, searchByNameOrEmail } from '../redux/userSlice'
import { useLocation } from 'react-router-dom'

const Search = () => {

    const dispatch = useDispatch()
    const location = useLocation()

    const handleSubmit = (e) => {
        const search = e.target.value
        if(search === '') {
            dispatch(allUsers())
        } else {
            dispatch(searchByNameOrEmail(search))
        }
    }

    return (
        <div className="d-flex" role="search">
            <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search" onChange={handleSubmit} disabled={location.pathname !== '/users'}/>
        </div>
    )
}

export default Search