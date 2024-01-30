import ResumeLink from "../ResumeLink/ResumeLink";
import Link from "../Link";
import "./NavLinks.scss";

export default function NavLinks() {
  return (
    <nav className="nav-links">
      <ul className="nav-links__list">
        <Link href="#sobre" className="nav-links__link">
          Sobre Mim
        </Link>
        <Link href="#projetos" className="nav-links__link">
          Projetos
        </Link>
        <Link href="#contato" className="nav-links__link">
          Contato
        </Link>
        <li>
          <ResumeLink />
        </li>
      </ul>
    </nav>
  );
}
