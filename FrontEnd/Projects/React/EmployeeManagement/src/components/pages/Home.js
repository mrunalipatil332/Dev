import  React, { useState, useEffect }  from "react"
import { Link } from 'react-router-dom';
import axios from "axios";

const Home = () => {
    const [data, setUser] = useState([]);

    useEffect(() => {
       loadEmployee();
    }, []);

    const loadEmployee = async () => {
        const result = await axios.get("http://localhost:3001/data");
        setUser(result.data.reverse());
    }

    const deleteUser = async id => {
        await axios.delete(`http://localhost:3001/data/${id}`);
        loadEmployee();

    }

    return (
        <div className="container">
            <div className="py-4">
                <h1>Home Page</h1>
                <table class="table border shadow">
  <thead class="thead-dark">
    <tr>
      <th scope="col">#</th>
      <th scope="col">First_Name</th>
      <th scope="col">Last_Name</th>
      <th scope="col">Email</th>
      <th>Action</th>
    </tr>
  </thead>
  <tbody>
   {
       data.map((user, index) => (
          <tr>
          <th scope="row">{index + 1}</th>
           <td>{user.first_name}</td>
           <td>{user.last_name}</td>
           <td>{user.email}</td>
           <td>
               <Link class="btn btn-primary mr-2" to={`/Employee/${user.id}`}>View</Link>
               <Link class="btn btn-outline-primary mr-2" to={`/Employee/edit/${user.id}`}>Edit</Link>
               <Link class="btn btn-danger" onClick={() => deleteUser(user.id)}>Delete</Link>
           </td>
          </tr>
       ))
   }
  </tbody>
</table>
</div>
</div>
    );
};

export default Home;
