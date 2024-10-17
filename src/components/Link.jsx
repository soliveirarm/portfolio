export default function Link({ href, children, ...props }) {
  return (
    <li className="hover:text-accent hover:scale-110 transition">
      <a href={href} {...props}>
        {children}
      </a>
    </li>
  )
}
