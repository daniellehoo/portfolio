import React, { Component } from 'react';
import Nav from './Nav';

function HomeHeader(props) {
    return (
      <div>
        <Nav />
        <h1 className="title-header">Danielle Hoo | 丹妮爾胡</h1>
        <h2 className="title-subheader">Web Developer</h2>
      </div>
    );
  };

export default HomeHeader;
