import React, { Component } from 'react';
import {  Switch, Route, Redirect, Link } from 'react-router-dom';
import '../App.css';
import cat from '../images/good_luck_cat.jpg'

function Contact(props){

    return (
      <div className="about">
        <a href="mailto:daniellem.hoo@gmail.com?Subject=Hello" target="_top"><img className="abstract" src={cat} /></a>
        <a className="email" href="mailto:daniellem.hoo@gmail.com?Subject=Hello" target="_top">Email Me <i className="fa fa-envelope-o fa-1x" aria-hidden="true"></i>
        </a>
      </div>
    );
  };


export default Contact;
