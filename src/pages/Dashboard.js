import React from 'react'
import { useDispatch } from 'react-redux';
import { Link } from 'react-router-dom'

const Dashboard = () => {
  document.title = 'Users::Dashboard'
  const dispatch = useDispatch();
  return (
    <div>
         <p className="fs-2">Dashboard</p>
         <p className="fs-4">Welcome admin!</p>
         To manage user, Please navigate to <Link to="/users">users</Link> page.
    </div>
  )
}

export default Dashboard