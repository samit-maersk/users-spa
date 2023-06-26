import React from 'react'

const Error = ({message="Please try after sometime", errorType="An error occured!"}) => {
  return (
    <div className="error alert alert-danger" role="alert">
        <p className="fw-semibold">{errorType}</p>
        <p className="fw-light">{message}</p>
    </div>
  )
}

export default Error