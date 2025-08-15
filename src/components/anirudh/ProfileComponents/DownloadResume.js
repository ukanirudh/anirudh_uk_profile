// import Resume from '/UK_ANIRUDH-resume.pdf';

const DownloadResume = () => {
  return (
    <div className="row">
      <div className="columns contact-details">
        <p>
          <a href={'/UK_ANIRUDH-resume.pdf'} target='_blank' className="button">
          <i className="fas fa-id-badge margin-right-5px"></i>
            View Online
          </a>
        </p>
      </div>
      <div className="columns download">
        <p>
           <a href={'/UK_ANIRUDH-resume.pdf'} download className="button">
             <i className="fa fa-download margin-right-5px"></i>
             Download Resume
           </a>
        </p>
      </div>
    </div>
  )
}

export default DownloadResume
