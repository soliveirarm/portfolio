import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faCodepen,
  faLinkedin,
  faGithub,
} from "@fortawesome/free-brands-svg-icons";

export default function Socials() {
  return (
    <ul className="socials flex">
      <li>
        <a href="https://codepen.io/oliveirasarah" target="_blank">
          <FontAwesomeIcon icon={faCodepen} />
        </a>
      </li>
      <li>
        <a href="https://www.linkedin.com/in/oliveira-sarah/" target="_blank">
          <FontAwesomeIcon icon={faLinkedin} />
        </a>
      </li>
      <li>
        <a href="https://github.com/oliveirasarah" target="_blank">
          <FontAwesomeIcon icon={faGithub} />
        </a>
      </li>
    </ul>
  );
}
