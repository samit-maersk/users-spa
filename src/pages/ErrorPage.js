import React from 'react'
import Error from './Error'
const ErrorPage = () => {
  return (
    <div className="container">
      <Error errorType={"Not Found"} message={"The page not found"}/>
    </div>
  )
}

export default ErrorPage