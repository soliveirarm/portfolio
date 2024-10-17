export default function Link({ href, children, ...props }) {
  return (
    <li className="hover:text-accent hover:scale-105 transition">
      <a href={href} {...props}>
        {children}
      </a>
    </li>
  )
}
