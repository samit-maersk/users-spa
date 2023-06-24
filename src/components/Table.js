import React from 'react'

const Table = ({data=[], editUser = () => {}, deleteUser = () => {}}) => {
  return (
    <table className="table table-striped table-hover">
          <thead>
            <tr>
              {data && Object.keys(data[0] ? data[0] : []).map((item, idx) => <th scope="col" key={idx}>{item}</th> )}
              <th scope="col">action</th>
            </tr>
          </thead>
          <tbody>
            {data && data.map((item, idx) => (
              <tr key={idx}>
                {Object.keys(data[0] ? data[0] : []).map((colItem, colIdx) => <td key={colIdx}>{item[colItem]}</td> )}
                
                <td>
                    <button className="btn btn-default btn-outline-primary" disabled data-bs-toggle="modal" data-bs-target="#staticBackdrop" onClick={() => editUser(item)}>
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
  )
}

export default Table