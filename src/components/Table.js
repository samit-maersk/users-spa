import React from 'react'
import Modal from './Modal'

const Table = ({data=[], deleteUser = () => {}}) => {

  return (
    <>
    {data.map((item, idx) => <Modal key={idx} operation="Update User" id={item.id} data={item}/>)}
    
    <table className="table table-striped table-hover">
          <thead>
            <tr>
              {data && Object.keys(data[0] ? data[0] : []).map((item, idx) => <th scope="col" key={idx}>{item}</th> )}
              <th scope="col">action</th>
            </tr>
          </thead>
          <tbody>
            {data.map((item, idx) => (
              <tr key={idx}>
                {Object.keys(data[0] ? data[0] : []).map((colItem, colIdx) => <td key={colIdx}>{item[colItem]}</td> )}
                
              <td>
                  <button className="btn btn-default btn-outline-primary" data-bs-toggle="modal" data-bs-target={"#staticBackdrop-"+item.id}>
                    <i className="bi bi-pen"></i>
                  </button>
                  <button className="btn btn-default btn-outline-danger" onClick={() => deleteUser(item.id)}>
                    <i className="bi bi-trash3"></i>
                  </button>
              </td>
            </tr>
          ))}
        </tbody>
  </table>
        </>
  )
}

export default Table