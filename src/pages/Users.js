import React, { useState } from 'react'
import Error from './Error'
import Modal from '../components/Modal'
import { useDispatch, useSelector } from 'react-redux'
import Table from '../components/Table'
import { deleteUser } from '../redux/userSlice'

const Users = () => {
  const dispatch = useDispatch()
  const { data, loading, error } = useSelector((state) => state.users)

  const editUser = (e) => {
    console.log(e)
  }

  const removeUser = (e) => {
    console.log(e)
    dispatch(deleteUser(e))
  }

  if(loading) {
    return (
      <div className='d-flex justify-content-center'>
        <div className="spinner-border text-primary" role="status">
          <span className="visually-hidden">Loading...</span>
        </div>
      </div>
    )
  }

  if(error) {
    return (
      <Error message={error}/>
    )
  }
  
  return (
      <div>
        <div className="d-flex justify-content-center">
          <button className="btn btn-default btn-outline-primary" data-bs-toggle="modal" data-bs-target="#staticBackdrop">
            <i className="bi bi-person-plus-fill h3"></i>
            {data.length === 0 ? <p className="fw-lighter">Add User</p> : ''}
          </button>
        </div>
        
        <Modal/>
        {data.length > 0 ? <Table data={data} editUser={editUser} deleteUser={removeUser}/> : <Error errorType={"404"} message={"No Data found, Please create some"}/>}
      </div>
  )
}

export default Users