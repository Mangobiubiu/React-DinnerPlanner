import React, { Component } from 'react';
import './Welcome.css';
import { Link } from 'react-router-dom';

class Welcome extends Component {
  render() {
    return (
      <div className="Welcome">

        <h1>Welcome to the dinner planner React Startup code!</h1>
        
        <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. </p>
        
        <Link to="/search">
            <button>Start planning</button>
        </Link>
      </div>
    );
  }
}

export default Welcome;