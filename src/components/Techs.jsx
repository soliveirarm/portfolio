export default function Techs({ array }) {
  return (
    <div className="flex gap-2 text-accent-light font-medium">
      {array.map((tech) => (
        <span className="bg-accent/10 py-1 px-2 rounded" key={tech}>
          {tech}
        </span>
      ))}
    </div>
  )
}
