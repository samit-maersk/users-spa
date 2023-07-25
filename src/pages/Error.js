import React from 'react'

const Error = ({message="Please try after sometime", errorType="An error occured!",e={}}) => {
  return (
    <div className="error alert alert-danger" role="alert">
        <p className="fw-semibold">{errorType}</p>
        <p className="fw-light">{message}</p>

        {Object.keys(e).map((eK,i) => ['message','status', 'statusText', 'internal','data'].includes(eK) ? <p className="fw-light" key={i}>{eK} : {e[eK]}</p> : '')}
    </div>
  )
}

export default Error