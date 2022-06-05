import React from 'react'
import Education from './ResumeSection/Education'
import Work from './ResumeSection/Work'
import Skills from './ResumeSection/Skills'
import DownloadResume from './DownloadResume'
import Portfolio from './Portfolio'
import { Tab } from 'semantic-ui-react'

const panes = [
  { menuItem: 'Professional', render: () => <Tab.Pane size='huge'>
    <>
      <Work />
      <Skills />
      <Education />
      <DownloadResume />
    </>
  </Tab.Pane> },
  { menuItem: 'Passion', render: () => <Tab.Pane>
    <Portfolio />
  </Tab.Pane> },
]

const LifeExperienceTabs = () => {
  return (
    <Tab
      menu={{ 
        fluid: true, 
        attached: true, 
        tabular: true, 
        widths: 2, 
        size: 'massive'
      }} 
      panes={panes}
    />
  )
}



const Resume = () => {
  return (
    <React.Fragment>
      <section id="resume">
        <LifeExperienceTabs />
      </section>
    </React.Fragment>
  )
}

export default Resume
