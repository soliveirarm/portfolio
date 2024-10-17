import { TbFileTypePdf } from "react-icons/tb"

export default function ResumeLink() {
  return (
    <a
      href="curriculo.pdf"
      target="_blank"
      className="font-bold text-accent transition flex items-center gap-2.5 text-lg rounded-10 border-2 border-accent p-4 hover:bg-accent hover:text-black hover:scale-110"
    >
      <TbFileTypePdf size="24" />
      <span>Meu Currículo</span>
    </a>
  )
}
