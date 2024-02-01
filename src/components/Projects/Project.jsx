import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowUpRightFromSquare } from "@fortawesome/free-solid-svg-icons";

export default function Project({ cover, title, desc, pageLink, techs }) {
  return (
    <section className="project">
      <img className="project__img" src={cover} />

      <h1 className="project__title accent">
        <a href={pageLink} target="_blank">
          <span>{title}</span>
          <FontAwesomeIcon icon={faArrowUpRightFromSquare} size="xs" />
        </a>
      </h1>

      <div className="project__content">
        <p className="project__description">{desc}</p>
        <p className="project__techs">
          Desenvolvido com: <span className="accent">{techs}</span>
        </p>
      </div>
    </section>
  );
}
