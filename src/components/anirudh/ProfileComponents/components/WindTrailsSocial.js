import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebook, faInstagram } from '@fortawesome/free-brands-svg-icons';

const WindtrailsSocial = () => {
    return (
        <ul className="social-links social">
            <li>
                <a href="https://www.facebook.com/WindtrailsIndia-101865791197770/" rel="noopener noreferrer" target='_blank'>
                    <FontAwesomeIcon icon={faFacebook} />
                </a>
            </li>
            <li>
                <a href="https://www.instagram.com/windtrailsindia/" rel="noopener noreferrer" target='_blank'>
                    <FontAwesomeIcon icon={faInstagram} />
                </a>
            </li>
        </ul>

    )
}
export default WindtrailsSocial;