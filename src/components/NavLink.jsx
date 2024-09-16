function NavLink({ href, children, isSelected, ...props }) {
  return (
    <li>
      <a
        className={`link uppercase tracking-wider ${
          isSelected ? "selected" : null
        }`}
        href={href}
        {...props}
      >
        {children}
      </a>
    </li>
  )
}

export default NavLink
