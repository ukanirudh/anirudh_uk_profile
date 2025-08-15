"use client";

import React, { useState, useEffect } from 'react'
import {
  Segment,
} from 'semantic-ui-react'
import AppHeaderDesktop from './AppHeaderDesktop'
import MySocialLinks from './MySocialLinks';
import WindtrailsSocial from './WindTrailsSocial';
import { useInView } from 'react-intersection-observer';

const DesktopContainer = ({ showLinks = true }) => {
  const [fixed, setFixed] = useState(false);
  const { ref, inView } = useInView({
    threshold: 0, // trigger when bottom passes
  });

  useEffect(() => {
    setFixed(!inView); // same behavior as onBottomPassed
  }, [inView]);

  return (
      <Segment
        className='responsive-primary-container'
        inverted
        textAlign='center'
        style={{ minHeight: 700, padding: '1em 0em 0em 0em' }}
        vertical
      >
        <AppHeaderDesktop fixed={fixed} />
        <header id="home" ref={ref}>
          <div className="row banner">
            <div className="banner-text">
              <h1 className="responsive-headline">I'm Anirudh UK.</h1>
              <h3>
                An <span>Frontend Engineer</span> by profession. A <span>Traveller</span> and <span>Trekker</span> by passion.
              </h3>
              <h3> <i> "Climb the mountains, not so that the world can see you, but so that you can see the world" </i></h3>
              <hr />
              <MySocialLinks />
              <hr />
              <h3>For Wild tours and expeditions, follow us on WindTrails</h3>
              <WindtrailsSocial />
            </div>
          </div>
          {
            showLinks && <p className="scrolldown">
              <a className="smoothscroll" href="#about"><i className="icon-down-circle"></i></a>
            </p>
          }
        </header>
      </Segment>
  )
}

export default DesktopContainer;