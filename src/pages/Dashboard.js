import React from 'react'
import { Link } from 'react-router-dom'

const Dashboard = () => {
  return (
    <div>
         <p class="fs-2">Dashboard</p>
         <Link to="/users">users</Link>
    </div>
  )
}

export default Dashboard