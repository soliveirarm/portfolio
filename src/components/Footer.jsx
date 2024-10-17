import Socials from "./Socials"

export default function Footer() {
  return (
    <footer className="border-t border-accent border-dashed pt-8 pb-2 flex flex-col items-center gap-2">
      <p className="font-medium text-accent-light font-title text-lg">
        Feito com React e Tailwind CSS 💖
      </p>
      <Socials />
    </footer>
  )
}
