import ResumeBtn from "./ResumeBtn";
import Link from "./Link";

export default function NavLinks() {
  return (
    <nav className="nav-links">
      <ul className="flex-column">
        <Link href="#sobre">Sobre Mim</Link>
        <Link href="#projetos">Projetos</Link>
        <Link href="#contato">Contato</Link>
        <Link href="#">
          <ResumeBtn />
        </Link>
      </ul>
    </nav>
  );
}
