import React, { Component } from 'react';
import '../../App.css';


function Footer(props) {
    return (
      <div className="footer">
      <footer>
        <p id="footer"> Danielle Hoo ©2018 </p>
              <a href='http://www.github.com/daniellehoo' target="_blank">
                <i className="fa fa-github fa-1x" aria-hidden="true"></i>
              </a>
        			<a href='http://www.instagram.com/danihoo' target="_blank">
        				<i className="fa fa-instagram fa-1x" aria-hidden="true"></i>
        			</a>
              <a href='http://venomonice.tumblr.com/' target="_blank">
                <i className="fa fa-tumblr fa-1x" aria-hidden="true"></i>
              </a>
              <a href='https://www.flickr.com/photos/daniellehoo/' target="_blank">
                <i className="fa fa-flickr fa-1x" aria-hidden="true"></i>
              </a>
              <a href='https://medium.com/@danihoo' target="_blank">
                <i className="fa fa-medium fa-1x" aria-hidden="true"></i>
              </a>
        			<a href='http://www.pinterest.com/daniellemhoo' target="_blank">
        				<i className="fa fa-pinterest-square fa-1x" aria-hidden="true"></i>
        			</a>
              <a href='https://soundcloud.com/danihoo' target="_blank">
                <i className="fa fa-soundcloud fa-1x" aria-hidden="true"></i>
              </a>
          </footer>
        </div>
    );
  };

export default Footer;
