import React from 'react';
import "../node_modules/bootstrap/dist/css/bootstrap.css";
import Navbar from './components/layout/Navbar';
import About from './components/pages/About';
import Contact from './components/pages/Contact';
import Home from './components/pages/Home';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import AddEmployee from "./components/Employee/AddEmployee";
import EditEmpData from './components/Employee/EditEmpData';
import ViewEmployee from './components/Employee/ViewEmployee';


function App() {
  return (
    <Router>
      <div className="App">
    <Navbar />

    <switch>
      <Route exact path="/" component={Home} />
      <Route exact path="/about" component={About} />
      <Route exact path="/contact" component={Contact} />
      <Route exact path="/Employee/add" component={AddEmployee} />
      <Route exact path="/Employee/edit/:id" component={EditEmpData} />
      <Route exact path="/Employee/:id" component={ViewEmployee} />

    </switch>

    </div>
    </Router>
  );
}

export default App;
