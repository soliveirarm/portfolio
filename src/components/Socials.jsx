import { LuGithub, LuCodepen, LuLinkedin, LuMail } from "react-icons/lu"
import { FaWhatsapp } from "react-icons/fa"

import Link from "./Link"

export default function Socials() {
  return (
    <ul className="socials flex gap-5 text-2xl p-4">
      <Link href="https://github.com/soliveirarm" target="_blank">
        <LuGithub />
      </Link>
      <Link href="https://www.linkedin.com/in/soliveirarm/" target="_blank">
        <LuLinkedin />
      </Link>
      <Link href="https://codepen.io/soliveirarm" target="_blank">
        <LuCodepen />
      </Link>
      <Link href="mailto:soliveirarm@gmail.com">
        <LuMail />
      </Link>
      <Link href="https://wa.link/tqa75s" target="_blank">
        <FaWhatsapp />
      </Link>
    </ul>
  )
}
