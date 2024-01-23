import ResumeLink from "../ResumeLink";
import Link from "../Link";

export default function NavLinks() {
  return (
    <nav className="section nav-links">
      <ul className="flex f-column">
        <Link href="#sobre" className="nav-link">
          Sobre Mim
        </Link>
        <Link href="#projetos" className="nav-link">
          Projetos
        </Link>
        <Link href="#contato" className="nav-link">
          Contato
        </Link>
        <li>
          <ResumeLink />
        </li>
      </ul>
    </nav>
  );
}
