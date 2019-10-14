import React, { Component } from 'react';
import {  Switch, Route, Redirect, Link } from 'react-router-dom';
import '../App.css';
import dh from '../images/dh_image.jpg'

function About(props){

    return (
      <div className="about">
        <div className="about_spacer"></div>
        <img className="abstract" src={dh} />
        <h2 className="about-text">One time I got rejected from Berghain.</h2>
        <h2 className="about-text">(Above: At the Whitney's Frank Stella retrospective.)</h2>
        <p className="about-bodytext">I am a Brooklyn-based full-stack, object-oriented web developer with a background in art history.</p>
        <p className="about-bodytext">I am particularly interested in collaborating and creating products linking the digital art world to the physical one. </p>
        <p className="about-bodytext">I enjoy traveling, distance running, I speak conversational Italian, and am a former MoMA employee.</p>
        <h2 className="tech-skills-header">Technical Skills:</h2>
        <div className="icon-wrapper">
          <i className="item1" class="devicon-javascript-plain"></i>
          <i className="item2" class="devicon-html5-plain"></i>
          <i class="devicon-css3-plain"></i>
          <i class="devicon-github-plain"></i>
          <i class="devicon-express-original"></i>
          <i class="devicon-jquery-plain"></i>
          <i class="devicon-nodejs-plain"></i>
          <i class="devicon-photoshop-line"></i>
          <i class="devicon-heroku-original"></i>
          <i class="devicon-postgresql-plain-wordmark"></i>
          <i class="devicon-rails-plain"></i>
          <i class="devicon-react-original"></i>
          <i class="devicon-ruby-plain"></i>
          <i class="devicon-wordpress-plain"></i>
        </div>
      </div>
    );
  };


export default About;
