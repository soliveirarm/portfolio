export default function NavLink({ href, children, isSelected, ...props }) {
  return (
    <li>
      <a
        className={`link ${isSelected ? "selected" : null}`}
        href={href}
        {...props}
      >
        {children}
      </a>
    </li>
  );
}
