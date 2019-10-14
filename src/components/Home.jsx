import React, { Component } from 'react';
import { Link, NavLink } from 'react-router-dom';
import takeOut from '../images/take-out.png';
import HomeHeader from './partials/HomeHeader';


class Home extends Component {
  render() {
    return (
      <div>
        <HomeHeader />
        <div className="home">
          <div className="spacer"></div>
            <NavLink to="/Projects"><img className="takeout" src={takeOut} alt="image" /></NavLink>
          </div>
      </div>
    );
  };
}

export default Home;
