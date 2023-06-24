import React from 'react'
import Error from './Error'
import Modal from '../components/Modal'

const Users = () => {

  if(false) {
    return (
      <div className='d-flex justify-content-center'>
        <div className="spinner-border text-primary" role="status">
          <span className="visually-hidden">Loading...</span>
        </div>
      </div>
    )
  }

  if(false) {
    return (
      <Error message={"user not found"}/>
    )
  }


  return (
      <div>
        <div className="d-flex justify-content-center">
          <button className="btn btn-default btn-outline-primary" data-bs-toggle="modal" data-bs-target="#staticBackdrop">
            <i className="bi bi-person-plus-fill h3"></i>
            {true ? '' : <p className="fw-lighter">Add User</p>}
          </button>
        </div>
        
        <Modal />

        <table className="table table-striped table-hover">
          <thead>
            <tr>
              <th scope="col">id</th>
              <th scope="col">username</th>
              <th scope="col">email</th>
              <th scope="col">action</th>
              
            </tr>
          </thead>
          <tbody>
            {[1].map((idx, item) => (
              <tr key={idx}>
                <td>1</td>
                <td>2</td>
                <td>3</td>
                <td>
                    <button className="btn btn-default btn-outline-primary" data-bs-toggle="modal" data-bs-target="#staticBackdrop">
                      <i className="bi bi-pen"></i>
                    </button>
                    <button className="btn btn-default btn-outline-danger">
                      <i className="bi bi-trash3"></i>
                    </button>
                </td>
              </tr>
            ))}
            
          </tbody>
        </table>
      </div>
  )
}

export default Users