import React from 'react'
import { Rating } from 'semantic-ui-react'
import { Grid } from 'semantic-ui-react'

const Skills = () => {
  return (
    <div className="row skill">
      <div className="three columns header-col">
        <h1><span>Skills</span></h1>
      </div>
      <div className="nine columns main-col">
        <div className="bars">
          <h2>Primary Skillset</h2>
          <Grid columns='equal'>
            <Grid.Column>
                <Grid.Row>
                  <Grid.Column className='skill-name'>Javascript</Grid.Column>
                  <Grid.Column><Rating size={'huge'} defaultRating={4} maxRating={5} disabled /></Grid.Column>
                </Grid.Row>
                <Grid.Row>
                  <Grid.Column className='skill-name'>Typescript</Grid.Column>
                  <Grid.Column><Rating size={'huge'} defaultRating={4} maxRating={5} disabled /></Grid.Column>
                </Grid.Row>
                <Grid.Row>
                  <Grid.Column className='skill-name'>React</Grid.Column>
                  <Grid.Column><Rating size={'huge'} defaultRating={4} maxRating={5} disabled /></Grid.Column>
                </Grid.Row>
                <Grid.Row>
                  <Grid.Column className='skill-name'>Redux</Grid.Column>
                  <Grid.Column><Rating size={'huge'} defaultRating={4} maxRating={5} disabled /></Grid.Column>
                </Grid.Row>
                <Grid.Row>
                  <Grid.Column className='skill-name'>RTL</Grid.Column>
                  <Grid.Column><Rating size={'huge'} defaultRating={4} maxRating={5} disabled /></Grid.Column>
                </Grid.Row>
                <Grid.Row>
                  <Grid.Column className='skill-name'>Playwright</Grid.Column>
                  <Grid.Column><Rating size={'huge'} defaultRating={3} maxRating={5} disabled /></Grid.Column>
                </Grid.Row>
            </Grid.Column>
            <Grid.Column>
              <Grid.Row>
                  <Grid.Column className='skill-name'>TailwindCss</Grid.Column>
                  <Grid.Column><Rating size={'huge'} defaultRating={4} maxRating={5} disabled /></Grid.Column>
              </Grid.Row>
              <Grid.Row>
                  <Grid.Column className='skill-name'>GraphQL</Grid.Column>
                  <Grid.Column><Rating size={'huge'} defaultRating={4} maxRating={5} disabled /></Grid.Column>
              </Grid.Row>
              <Grid.Row>
                  <Grid.Column className='skill-name'>CSS</Grid.Column>
                  <Grid.Column><Rating size={'huge'} defaultRating={4} maxRating={5} disabled /></Grid.Column>
              </Grid.Row>
              <Grid.Row>
                  <Grid.Column className='skill-name'>HTML</Grid.Column>
                  <Grid.Column><Rating size={'huge'} defaultRating={3} maxRating={5} disabled /></Grid.Column>
              </Grid.Row>
              <Grid.Row>
                  <Grid.Column className='skill-name'>jQuery</Grid.Column>
                  <Grid.Column><Rating size={'huge'} defaultRating={3} maxRating={5} disabled /></Grid.Column>
              </Grid.Row>
              <Grid.Row>
                  <Grid.Column className='skill-name'>Angular</Grid.Column>
                  <Grid.Column><Rating size={'huge'} defaultRating={3} maxRating={5} disabled /></Grid.Column>
              </Grid.Row>
            </Grid.Column>
          </Grid>
        </div>

        <div className="bars m-t-32">
          <h2>Skills acquired on personal interest</h2>
          <ul className="skills">
            <li><span>Basics of React Native</span></li>
            <li><span>Webpack bundling</span></li>
            <li><span>UI libraries for React, Ant, semantic-ui, bootstrap, Redux-forms</span></li>
            <li><span>Basics of Docker and Kubernetes</span></li>
          </ul>
        </div>

      </div>
    </div>
  )
}

export default Skills;
