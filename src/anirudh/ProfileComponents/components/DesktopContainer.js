import React, { useState } from 'react'
import {
  Segment,
  Visibility,
} from 'semantic-ui-react'
import AppHeaderDesktop from './AppHeaderDesktop'

const DesktopContainer = ({showLinks = true}) => {
  const [fixed, setFixed] = useState(false);

  return (
    <Visibility
        once={false}
        onBottomPassed={() => setFixed({ fixed: true })}
        onBottomPassedReverse={() => setFixed({ fixed: false })}
      >
      <Segment
        className='responsive-primary-container'
        inverted
        textAlign='center'
        style={{ minHeight: 700, padding: '1em 0em' }}
        vertical
      >
        <AppHeaderDesktop fixed={fixed} />
        <header id="home">
            <div className="row banner">
              <div className="banner-text">
                  <h1 className="responsive-headline">I'm Anirudh UK.</h1>
                  <h3>
                  An <span>UI developer</span> by profession. A <span>Traveller</span> and <span>Trekker</span> by passion.
                  </h3>
                  <h3> <i> "Climb the mountains, not so that the world can see you, but so that you can see the world" </i></h3>
                  <hr />
                  <ul className="social">
                    <li><a href="https://www.facebook.com/anirudh.kukkilaya.3" target='_blank'><i class="fab fa-facebook"></i></a></li>
                    <li><a href="https://www.linkedin.com/in/anirudh-uk/" target='_blank'><i class="fab fa-linkedin"></i></a></li>
                    <li><a href="https://github.com/ukanirudh" target='_blank'><i class="fab fa-github"></i></a></li>
                    <li><a href="https://www.instagram.com/anirudhuk/" target='_blank'><i class="fab fa-instagram"></i></a></li>
                    <li><a href="http://trippinzindagi.wordpress.com/" target='_blank'><i class="fab fa-wordpress"></i></a></li>
                  </ul>
                  <hr />
                  <h3>For Wild tours and expeditions, follow us on WindTrails</h3>
                  <ul className="social">
                    <li><a href="https://www.facebook.com/WindtrailsIndia-101865791197770/" target='_blank'><i class="fab fa-facebook"></i></a></li>
                    <li><a href="https://www.instagram.com/windtrailsindia/" target='_blank'><i class="fab fa-instagram"></i></a></li>
                    <li><a href="http://trippinzindagi.wordpress.com/" target='_blank'><i class="fab fa-wordpress"></i></a></li>
                  </ul>
              </div>
            </div>
            {
              showLinks && <p className="scrolldown">
                            <a className="smoothscroll" href="#about"><i className="icon-down-circle"></i></a>
                          </p>
            }
            </header>
      </Segment>
    </Visibility>
  )
}

export default DesktopContainer;