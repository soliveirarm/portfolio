import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faFilePdf } from "@fortawesome/free-solid-svg-icons"

function ResumeLink() {
  return (
    <a
      href="curriculo.pdf"
      target="_blank"
      className="font-bold transition text-accent flex items-center gap-2.5 border-2 border-accent p-4 rounded-lg hover:bg-accent hover:text-white hover:scale-110"
    >
      <FontAwesomeIcon icon={faFilePdf} size="lg" />
      <span>Meu Currículo</span>
    </a>
  )
}

export default ResumeLink
