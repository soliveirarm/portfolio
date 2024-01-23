import TechIcon from "./TechIcon";
import {
  faCss3,
  faHtml5,
  faJs,
  faReact,
  faSass,
} from "@fortawesome/free-brands-svg-icons";
import { faDatabase } from "@fortawesome/free-solid-svg-icons";

export default function Tech() {
  return (
    <div className="tech flex f-column f-center">
      <h2 className="tech__title">
        Algumas <span className="accent">tecnologias</span> com as quais eu tive
        contato:
      </h2>
      <div className="tech__icons flex f-center">
        <TechIcon name="HTML" icon={faHtml5} />
        <TechIcon name="CSS" icon={faCss3} />
        <TechIcon name="JavaScript" icon={faJs} />
        <TechIcon name="Sass" icon={faSass} />
        <TechIcon name="Tailwind" />
        <TechIcon name="MySQL" icon={faDatabase} />
        <TechIcon name="React" icon={faReact} />
      </div>
    </div>
  );
}
