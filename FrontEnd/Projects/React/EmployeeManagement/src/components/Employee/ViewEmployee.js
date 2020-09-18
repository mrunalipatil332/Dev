import React, {useState, useEffect} from "react";
import { Link, useParams } from "react-router-dom";
import axios from "axios";

const ViewEmployee = () => {
    const [user, setUser] = useState({
        first_name: "",
        last_name: "",
        email: "",
        avatar: ""
    });
    
    const { id } = useParams();

    useEffect(() => {
        loadUser();
    }, []);

    const loadUser = async () => {
        const res = await axios.get("http://localhost:3001/data/" + id );
        setUser(res.data);
    };

    return (
        
        <div className="container py-5">
        <Link className="btn btn-primary" to="/"> 
            back to Home
  </Link>

        <ul className="list-group w-50">
            <li className="list-group-item">name: {user.first_name}</li>
            <li className="list-group-item">author: {user.last_name}</li>
            <li className="list-group-item">price: {user.email}</li>
            <li className="list-group-item">details: {user.avatar}</li>
        </ul>
    </div>
);
};

export default ViewEmployee;




