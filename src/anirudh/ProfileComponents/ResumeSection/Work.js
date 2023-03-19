import React from 'react'

const Work = () => {
  return (
    <div className="row work">
       <div className="three columns header-col">
          <h1><span>Work</span></h1>
       </div>

       <div className="nine columns main-col">
         <div className="row item">
            <div className="twelve columns">
              <h3>EclecticIQ</h3>
              <p className="info">Senior Software Engineer, Frontend Engineer<span>&bull;</span> <em className="date">May 2022 - Present</em></p>
              <p>
                  Product: XDR <br />
                  Role​: UI Developer <br />
                  Description​: Integrated solution for security analysts for ER product, to view and analyse security threats for an end-point.
              </p>
            </div>
          </div>
          <br/>
          <div className="row item">
            <div className="twelve columns">
              <h3>Syncron</h3>
              <p className="info">Senior Software Engineer, Frontend Engineer<span>&bull;</span> <em className="date">Oct 2019 - May 2022</em></p>
              <p>
                  Product: Syncron Price <br />
                  Role​: UI Lead & Developer <br />
                  Description​: Our team was responsible for pioneering the project of first module to be migrated from JSF-JAVA UI to Angular UI.
              </p>
              <p>
                  Product: Syncron Price analytics tool <br />
                  Role​: UI Developer <br />
                  Description​: Application for the customers to view the statistical visualization and run analytics on the after-sales data of their dealers.
              </p>
            </div>
          </div>
          <br />
          <div className="row item">
             <div className="twelve columns">
                <h3>JiffleNow</h3>
                <p className="info">Software Engineer, UI developer<span>&bull;</span> <em className="date">Jun 2017 - Oct 2019</em></p>
                <p>
                 Product: ​Jifflenow iris application Main Feature with the product​: External Integrations <br />
                 Role​: UI Developer <br />
                 Description​: Our team was responsible to integrate our application with external CRM tools including Salesforce
                 </p>
                 <p>
                 Product: ​Jifflenow iris application Main Feature with the product​: Core UI/UX team <br />
                 Role​: UI Developer <br />
                 Description​: The core UI development team of the application. Responsible for introducing new UI features and also responsible in migrating few old features to ​React
                </p>
             </div>
          </div>
          <br />
          <div className="row item">
             <div className="twelve columns">
                <h3>Oracle</h3>
                <p className="info">Associate Software Engineer<span>&bull;</span> <em className="date">Oct 2015 - Jun 2017</em></p>
                <p>
                   Product​: Collaboration Cloud Administration Console, CGBU <br />
                   Role​: UI Developer <br />
                   Description​: An Admin tool to manage all the resources within their organization
                   </p>
                   <p>
                   Product​: Convergence, CGBU <br />
                   Role​: UI Developer <br />
                   Description​: An enterprise Mail client application
                </p>
             </div>
          </div>
       </div>
    </div>
  )
}

export default Work;
