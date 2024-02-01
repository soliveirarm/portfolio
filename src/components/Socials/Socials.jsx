import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faCodepen,
  faLinkedin,
  faGithub,
} from "@fortawesome/free-brands-svg-icons";
import Link from "../Link";
import "./Socials.scss";

export default function Socials() {
  return (
    <ul className="section socials">
      <Link href="https://github.com/oliveirasarah" target="_blank">
        <FontAwesomeIcon icon={faGithub} />
      </Link>
      <Link href="https://www.linkedin.com/in/oliveira-sarah/" target="_blank">
        <FontAwesomeIcon icon={faLinkedin} />
      </Link>
      <Link href="https://codepen.io/oliveirasarah" target="_blank">
        <FontAwesomeIcon icon={faCodepen} />
      </Link>
    </ul>
  );
}
