import React from 'react'
import Portfolio from './Portfolio'
import { Tab, Header, Menu } from 'semantic-ui-react'
import ProfessionalResume from './Professional';

const panes = [
  { 
    menuItem: (
      <Menu.Item key='Professional'>
        <Header size='medium'>Professional</Header>
      </Menu.Item>
    ),
    render: () => (
      <Tab.Pane size='huge'>
        <>
          <ProfessionalResume />
        </>
      </Tab.Pane>
    )
  },
  { 
    menuItem: (
      <Menu.Item key='Passion'>
        <Header size='medium'>Passion</Header>
      </Menu.Item>
    ),
    render: () => (
      <Tab.Pane size='huge'>
        <Portfolio />
      </Tab.Pane>
    ) 
  },
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
