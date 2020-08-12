import React from 'react';
import './App.css';
import Home from './container/Home';
import Header from './component/Header';
import Hero from './component/Hero';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import ContactUs from './container/ContactUs';
import Post from './container/Post';


function App() {
  return (
    <Router>
      <div className="App">
        <Header />
        <Hero />

        <Route path="/" exact component={Home} />
        <Route path="/contactus" component={ContactUs} />
        <Route path="/post/:postId" component={Post} />
      </div>
    </Router>
  );
}

export default App;
