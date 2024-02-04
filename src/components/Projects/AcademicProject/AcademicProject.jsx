import "./AcademicProject.scss";

function AcademicProject({ cover, id, title }) {
  return (
    <div className="academic-project">
      <img src={cover} alt="" className="academic-project__img" />
      <h2 className="academic-project__semester">{id}º semestre</h2>
      <p className="academic-project__name">{title}</p>
    </div>
  );
}

export default AcademicProject;
