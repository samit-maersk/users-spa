import React from 'react'
import { useDispatch } from 'react-redux';
import { addUser, editUser } from '../redux/userSlice';

const Modal = (props) => {
    const dispatch = useDispatch();
    const {operation="Add New User", id="new", data={id:"",name:"",email:""}} = props
    const [user, setUser] = React.useState(data)
    
    React.useEffect(() => {
        setUser(data)
    }, [props]) //just data gives so many Maximum update depth exceeded" warning. So, props is used

    const handleChange = (e) => {
        setUser({
            ...user,
            [e.target.name]: e.target.value
        })
    }
    const handleSubmit = (e) => {
        if(user.id === ""){
            dispatch(addUser(user));
        } else {
            dispatch(editUser(user));
        }
        setUser({
            name: "",
            email: ""
        })
    }

    return (
        <div className="modal fade" id={"staticBackdrop-"+id} data-bs-backdrop="static" data-bs-keyboard="false" tabIndex="-1" aria-labelledby={"staticBackdropLabel-"+id} aria-hidden="true">
            <div className="modal-dialog modal-dialog-centered">
                <div className="modal-content">
                    <div className="modal-header">
                        <h1 className="modal-title fs-5" id={"staticBackdropLabel-"+id}>{operation}</h1>
                        <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                    </div>
                    <div className="modal-body">
                        <div className="form-floating">
                            <input type="text" className="form-control" id={"floatingName-"+id} placeholder="Name" name='name' value={user.name} onChange={handleChange}/>
                            <label htmlFor={"floatingName-"+id}>Name</label>
                        </div>
                        <br/>
                        <div className="form-floating mb-3">
                            <input type="email" className="form-control" id={"floatingEmail-"+id} validate="true" placeholder="name@example.com" name='email' value={user.email} onChange={handleChange}/>
                            <label htmlFor={"floatingEmail-"+id}>Email address</label>
                        </div>
                    </div>
                    <div className="modal-footer">
                        <button type="button" className="btn btn-secondary" data-bs-dismiss="modal">Cancel</button>
                        <button type="button" className="btn btn-primary" data-bs-dismiss="modal" onClick={handleSubmit}>{operation}</button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Modal