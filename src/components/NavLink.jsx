export default function NavLink({ href, children, isSelected, ...props }) {
  return (
    <li>
      <a
        className={`nav-link relative font-medium transition tracking-wider hover:text-accent ${
          isSelected ? "-selected" : ""
        }`}
        href={href}
        {...props}
      >
        {children}
      </a>
    </li>
  )
}
