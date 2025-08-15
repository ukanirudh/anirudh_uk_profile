import React from 'react'
import MySocialLinks from './MySocialLinks';
import WindtrailsSocial from './WindTrailsSocial';

const Footer = (props = {}) => {
  const {showLinks = true} = props
  return (
    <footer id="contact">
       <div className="row footer-container">
          <div className="twelve columns">
             {
               showLinks && <MySocialLinks />
            }
            <hr />
            <h3>For Wild tours and expeditions, follow us on WindTrails</h3>
            <WindtrailsSocial />
            <hr />
            <ul className="copyright">
              <li>(+91)-9036565202</li>
              <li><a href="mailto:anirudh.anirudh93@gmail.com?Subject=Reach Out" target="_top">anirudh.anirudh93@gmail.com</a></li>
              <li>(+91)-7892329983</li>
            </ul>
          </div>
       </div>
    </footer>
  )
}

export default Footer
