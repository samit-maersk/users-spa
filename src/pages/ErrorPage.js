import React from 'react'
import Error from './Error'
import { useRouteError } from 'react-router-dom'
const ErrorPage = () => {
  document.title = 'Users::Error'
  const e = useRouteError()
  
  return (
    <div className="container">
      <Error errorType={"Not Found"} message={"The page not found"} e={e}/>
    </div>
  )
}

export default ErrorPage