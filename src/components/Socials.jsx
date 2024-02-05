import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faCodepen,
  faLinkedin,
  faGithub,
  faWhatsapp,
} from "@fortawesome/free-brands-svg-icons";
import { faEnvelope } from "@fortawesome/free-regular-svg-icons";
import Flex from "./Style/Flex";
import Link from "./Link";
import styled from "styled-components";

const Ul = styled(Flex)`
  font-size: 22px;
`;

export default function Socials() {
  return (
    <Ul as="ul" className="section socials">
      <Link href="https://github.com/saraholiveirarm" target="_blank">
        <FontAwesomeIcon icon={faGithub} />
      </Link>
      <Link href="https://www.linkedin.com/in/saraholiveirarm/" target="_blank">
        <FontAwesomeIcon icon={faLinkedin} />
      </Link>
      <Link href="https://codepen.io/saraholiveirarm" target="_blank">
        <FontAwesomeIcon icon={faCodepen} />
      </Link>
      <Link href="mailto:saraholiveirarm@outlook.com">
        <FontAwesomeIcon icon={faEnvelope} />
      </Link>
      <Link href="https://wa.link/tqa75s" target="_blank">
        <FontAwesomeIcon icon={faWhatsapp} />
      </Link>
    </Ul>
  );
}
