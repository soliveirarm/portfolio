import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export default function TechIcon({ name, icon }) {
  return (
    <li className="technologies__icon">
      {icon && (
        <span>
          <FontAwesomeIcon icon={icon} />
        </span>
      )}
      <span>{name}</span>
    </li>
  );
}
