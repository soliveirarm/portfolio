export default function Link({ href, children, ...props }) {
  return (
    <li>
      <a href={href} {...props}>
        {children}
      </a>
    </li>
  );
}
