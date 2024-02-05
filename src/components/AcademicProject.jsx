function AcademicProject({ cover, id, title }) {
  return (
    <div>
      <img src={cover} alt="" />
      <h2>{id}º semestre</h2>
      <p>{title}</p>
    </div>
  );
}

export default AcademicProject;
