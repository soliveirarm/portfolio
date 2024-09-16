import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import {
  faCodepen,
  faLinkedin,
  faGithub,
  faWhatsapp,
} from "@fortawesome/free-brands-svg-icons"
import { faEnvelope } from "@fortawesome/free-regular-svg-icons"

import Link from "./Link"

function Socials() {
  return (
    <ul className="flex gap-5 p-4 text-2xl transition">
      <Link href="https://github.com/soliveirarm" target="_blank">
        <FontAwesomeIcon icon={faGithub} />
      </Link>
      <Link href="https://www.linkedin.com/in/soliveirarm/" target="_blank">
        <FontAwesomeIcon icon={faLinkedin} />
      </Link>
      <Link href="https://codepen.io/soliveirarm" target="_blank">
        <FontAwesomeIcon icon={faCodepen} />
      </Link>
      <Link href="mailto:soliveirarm@outlook.com">
        <FontAwesomeIcon icon={faEnvelope} />
      </Link>
      <Link href="https://wa.link/tqa75s" target="_blank">
        <FontAwesomeIcon icon={faWhatsapp} />
      </Link>
    </ul>
  )
}

export default Socials
