import React, { useEffect, useState } from 'react'
import Error from './Error'
import Modal from '../components/Modal'
import { useDispatch, useSelector } from 'react-redux'
import Table from '../components/Table'
import { dataByPageNumber, deleteUser } from '../redux/userSlice'
import Search from './Search'

const Users = () => {
  document.title = 'Users :: all'
  const dispatch = useDispatch()
  const { data, pageData, loading, error } = useSelector((state) => state.users)
  
  const [paginatedData,setPaginatedData] = useState([])

  //Pagination
  const [page, setPage] = useState(1)
  const [limit, setLimit] = useState(5)
  
  const handleLimitChange = (e) => {
    setPage(1)
    setLimit(e.target.value)
  }

  useEffect(() => {
    dispatch(dataByPageNumber({page: page, limit: limit}))
  }, [data, page, limit])

  const removeUser = (e) => {
    dispatch(deleteUser(e))
  }

  const convertNumberToArray = (num) => {
    let arr = []
    for(let i = 1; i <= num; i++) {
      arr.push(i)
    }
    return arr
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
          <button className="btn btn-default btn-outline-primary" data-bs-toggle="modal" data-bs-target="#staticBackdrop-new">
            <i className="bi bi-person-plus-fill h3"></i>
            {data.length === 0 ? <p className="fw-lighter">Add User</p> : ''}
          </button>
        </div>
        
        <Modal />
        { data.length > 0 ? (
          <>
            <Table data={pageData} deleteUser={removeUser}/>

            <div className="d-flex justify-content-center">
              <select onChange={ handleLimitChange }>
                <option value="5">5</option>
                <option value="10">10</option>
                <option value="20">20</option>
              </select>
              { convertNumberToArray(Math.ceil(data.length / limit)).map((c, idx) => <button key={idx} className={page === c ? 'btn btn-primary' : 'btn btn-outline-primary'} onClick={() => setPage(c)}>{c}</button>)}
            </div>
          </>
          ) : <Error errorType={"404"} message={"No Data found, Please create some"}/>}
      </div>
  )
}

export default Users