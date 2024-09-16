function Techs({ array }) {
  return (
    <div className="flex gap-2 font-medium">
      {array.map((tech) => (
        <span className="text-accent bg-accent/10 py-1 px-2 rounded" key={tech}>
          {tech}
        </span>
      ))}
    </div>
  )
}

export default Techs
