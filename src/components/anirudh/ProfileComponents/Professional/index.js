import React from 'react';
import Education from '../ResumeSection/Education'
import Work from '../ResumeSection/Work'
import Skills from '../ResumeSection/Skills'
import DownloadResume from '../DownloadResume'

const Professional = () => {
    return (
        <>
            <Skills />
            <Work />
            <Education />
            <DownloadResume />
        </>
    )
}

export default Professional;