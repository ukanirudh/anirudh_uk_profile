import React from 'react'
import Education from './ResumeSection/Education'
import Work from './ResumeSection/Work'
import Skills from './ResumeSection/Skills'
import DownloadResume from './DownloadResume'

const Resume = () => {
  return (
    <React.Fragment>
      {/*<Header />*/}
      {/*<DesktopContainer />*/}
      <section id="resume">
        <Work />
        <Skills />
        <Education />
        <DownloadResume />
      </section>
      {/*<Footer />*/}
    </React.Fragment>
  )
}

export default Resume
