import React, { Component } from 'react';
import { Link } from 'react-router-dom';

export default class HomeComponent extends Component {
  render() {
    return (
      <div>
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/login">Login</Link>
          </li>
          <li>
            <Link to="/register">Contact</Link>
          </li>
        </ul>
      </div>
    )
  }
}