import React from 'react'
import { useDispatch } from 'react-redux';
import { addUser } from '../redux/userSlice';

const Modal = ({operation="Add New User", data=null}) => {
    const dispatch = useDispatch();
    const [user, setUser] = React.useState({
        id: "",
        name: "",
        email: ""
    })

    if(data){
        operation = "Edit User"
        //TODO can we call a service for this?
        setUser({
            id: data.id,
            name: data.name,
            email: data.email
        })
    }

    const handleChange = (e) => {
        setUser({
            ...user,
            [e.target.name]: e.target.value
        })
    }
    const handleSubmit = (e) => {
        console.log(user)
        dispatch(addUser(user));
        setUser({
            name: "",
            email: ""
        })
    }

    return (
        <div className="modal fade" id="staticBackdrop" data-bs-backdrop="static" data-bs-keyboard="false" tabIndex="-1" aria-labelledby="staticBackdropLabel" aria-hidden="true">
            <div className="modal-dialog modal-dialog-centered">
                <div className="modal-content">
                    <div className="modal-header">
                        <h1 className="modal-title fs-5" id="staticBackdropLabel">{operation}</h1>
                        <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                    </div>
                    <div className="modal-body">
                        <div className="form-floating">
                            <input type="text" className="form-control" id="floatingName" placeholder="Name" name='name' value={user.name} onChange={handleChange}/>
                            <label htmlFor="floatingName">Name</label>
                        </div>
                        <br/>
                        <div className="form-floating mb-3">
                            <input type="email" className="form-control" id="floatingEmail" placeholder="name@example.com" name='email' value={user.email} onChange={handleChange}/>
                            <label htmlFor="floatingEmail">Email address</label>
                        </div>
                    </div>
                    <div className="modal-footer">
                        <button type="button" className="btn btn-secondary" data-bs-dismiss="modal">Cancel</button>
                        <button type="button" className="btn btn-primary" data-bs-dismiss="modal" onClick={handleSubmit}>Save</button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Modal