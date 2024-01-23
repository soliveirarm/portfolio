import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export default function TechIcon({ name, icon }) {
  return (
    <div className="tech__icon">
      {icon && (
        <span>
          <FontAwesomeIcon icon={icon} />
        </span>
      )}
      <span>{name}</span>
    </div>
  );
}
