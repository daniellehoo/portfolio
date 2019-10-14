import React, { Component } from 'react';
import {  Switch, Route, Redirect, Link } from 'react-router-dom';
import '../App.css';
import image1 from '../images/fish_game_screen_shot.png'
import image2 from '../images/art_base.png'
import image3 from '../images/travel_awesomely.png'
import image4 from '../images/designHaus.png'

function Projects(props){
    return (
      <div className="projects">
        <div className="spacer"></div>
        <div className="project_4">
          <a href="https://designhaus-a8946.firebaseapp.com/" target="_blank"><img className="project_images" src= {image4} /></a>
          <li><a href="https://designhaus-a8946.firebaseapp.com/" target="_blank">General Assembly Project 4: designHAUS</a><a className="github_link" href="https://github.com/daniellehoo/designHAUS">
          <i class="fa fa-github" aria-hidden="true"></i></a></li>
          <p className="projects-p">A sleek web application providing design inspiration to creatives built with React.js and Firebase</p>
        </div>
        <div className="project_3">
          <a href="https://travel-awesomely.herokuapp.com/" target="_blank"><img className="project_images" src= {image3} /></a>
          <li><a href="https://travel-awesomely.herokuapp.com/" target="_blank">General Assembly Project 3: Travel Awesomely</a>
          <a className="github_link" href="https://github.com/daniellehoo/travel_awesomely"><i class="fa fa-github" aria-hidden="true"></i></a></li>
          <p className="projects-p">An intuitive travel app for the modern traveler utilizing the Triposo API and built with a React.js front-end and a node/express back-end.</p>
        </div>
        <div className="project_2">
          <a href="https://artbasedb.herokuapp.com/" target="_blank"><img className="project_images" src= {image2} /></a>
          <li><a href="https://artbasedb.herokuapp.com/" target="_blank">General Assembly Project 2: ArtBase</a>
          <a className="github_link" href="https://github.com/daniellehoo/artbase">
          <i class="fa fa-github" aria-hidden="true"></i></a></li>
          <p className="projects-p">A full-CRUD art database with authentication and sessions capabilities built on node/express.</p>
        </div>
        <div className="project_1">
          <a href="https://fish-gameapp.surge.sh/" target="_blank"><img className="project_images" src= {image1} /></a>
          <li><a href="https://fish-gameapp.surge.sh/" target="_blank">GA Project 1: Fish Pond</a>
          <a className="github_link" href="https://github.com/daniellehoo/fishgame">
          <i class="fa fa-github" aria-hidden="true"></i></a></li>
          <p className="projects-p">A simple game built in JavaScript/jQuery that utilizes DOM manipulation and CSS transitions.</p>
        </div>
      </div>
    );
  };

export default Projects;
