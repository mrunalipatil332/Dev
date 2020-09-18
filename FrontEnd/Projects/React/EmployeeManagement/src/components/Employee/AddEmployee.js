import axios from "axios";
import React, { useState } from "react";
import { useHistory } from 'react-router-dom';

const AddEmployee = () => {
    let history = useHistory();
    const [user, setUser] = useState({
        first_name: "",
        last_name: "",
        email: "",
        avatar: ""
    });
    const {first_name,last_name,email,avatar} = user;

    const onINputChange = e => {
        setUser({...user,[e.target.name]: e.target.value})
    };

    const onSubmit = async e => {
        e.preventDefault();
        await axios.post("http://localhost:3001/data", user);
        history.push("/");
    };

    return (
        <div className="container">
        <div className="w-75 mx-auto shadow p-5">
            <h2 className="text-center mb-4">Add Employee Data</h2>
            <form onSubmit={e => onSubmit(e)}>
                <div className="form-group">
                    <input
                        type="text"
                        className="form-control form-control-lg"
                        placeholder="Enter First Name"
                        name="first_name"
                        value={first_name}
                        onChange={e => onINputChange(e)}
                        
                        
                        
                    />
                </div>
                <div className="form-group">
                    <input
                        type="text"
                        className="form-control form-control-lg"
                        placeholder="Enter Last Name"
                        name="last_name"
                        value={last_name}
                        onChange={e => onINputChange(e)}
                    />
                </div>
               
                <div className="form-group">
                    <input
                        type="text"
                        className="form-control form-control-lg"
                        placeholder="Enter Email"
                        name="email"
                        value={email}
                        onChange={e => onINputChange(e)}
                        
                    />
                </div>

                <div className="form-group">
                    <input
                        type="text"
                        className="form-control form-control-lg"
                        placeholder="Enter Avatar"
                        name="avatar"
                        value={avatar}
                        onChange={e => onINputChange(e)}

                    />
                </div>

                
               
                <button className="btn btn-primary btn-block">Add Employee</button>
            </form>
        </div>
    </div>
);
};

export default AddEmployee;