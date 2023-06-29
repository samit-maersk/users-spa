import React from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom'

const Dashboard = () => {
  document.title = 'Users::Dashboard'
  const dispatch = useDispatch();
  const {data} = useSelector((state) => state.users);

  return (
    <div>
         <p className="fs-2">Dashboard</p>
         <p className="fs-4">Welcome admin! Total count of the user is {data.length}</p>
         Navigate to <Link to="/users">users</Link> to manage users
    </div>
  )
}

export default Dashboard