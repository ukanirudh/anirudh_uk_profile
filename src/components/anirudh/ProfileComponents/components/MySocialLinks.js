import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebook, faGithub, faLinkedin, faInstagram, faWordpress } from '@fortawesome/free-brands-svg-icons';


const MySocialLinks = () => {
    return (
        <ul className="social-links social">
            <li>
                <a href="https://www.facebook.com/anirudh.kukkilaya.3" rel="noopener noreferrer" target='_blank'>
                    <FontAwesomeIcon icon={faFacebook} />
                </a>
            </li>
            <li>
                <a href="https://www.linkedin.com/in/anirudh-uk/" rel="noopener noreferrer" target='_blank'>
                    <FontAwesomeIcon icon={faLinkedin} />
                </a>
            </li>
            <li>
                <a href="https://github.com/ukanirudh" rel="noopener noreferrer" target='_blank'>
                    <FontAwesomeIcon icon={faGithub} />
                </a>
            </li>
            <li>
                <a href="https://www.instagram.com/anirudhuk/" rel="noopener noreferrer" target='_blank'>
                    <FontAwesomeIcon icon={faInstagram} />
                </a>
            </li>
            <li>
                <a href="http://trippinzindagi.wordpress.com/" rel="noopener noreferrer" target='_blank'>
                    <FontAwesomeIcon icon={faWordpress} />
                </a>
            </li>
        </ul>
    )
}

export default MySocialLinks;