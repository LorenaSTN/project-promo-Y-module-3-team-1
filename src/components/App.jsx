import "../scss/App.scss";
import { useState } from "react";
import Header from "./Header";
import Footer from "./Footer";

function App() {
  const [nameProject, setNameProject] = useState("Nombre del proyecto");
  const [sloganProject, setSloganProject] = useState("Eslogan del proyecto");
  const [technologies, setTechnologies] = useState("React JS - HTML - CSS");
  const [description, setDescription] = useState("Descripción");
  const [authorName, setAuthorName] = useState("Nombre");
  const [authorJob, setAuthorJob] = useState("Profesión");

  const handleChangeProject = (event) => {
    const valueProject = event.target.value;
    setNameProject(valueProject);
    //añadir codigo para que cuando la usuaria borre, se vuelva al valor inicial
  };

  const handleChangeSlogan = (event) => {
    const valueSlogan = event.target.value;
    setSloganProject(valueSlogan);
  };

  const handleChangeTechnologies = (event) => {
    const valueTechnologies = event.target.value;
    setTechnologies(valueTechnologies);
  };

  const handleChangeDescription = (event) => {
    const valueDescription = event.target.value;
    setDescription(valueDescription);
  };

  const handleChangeAuthor = (event) => {
    const valueAuthor = event.target.value;
    setAuthorName(valueAuthor);
  };

  const handleChangeJob = (event) => {
    const valueJob = event.target.value;
    setAuthorJob(valueJob);
  };

  return (
    <div className="container">
      <Header />
      <main className="main">
        <section className="hero">
          <h2 className="hero__title">Proyectos molones</h2>
          <p className="hero__text">
            Escaparate en línea para recoger ideas a través de la tecnología
          </p>
          <a className="hero__button--link" href="./">
            Ver proyectos
          </a>
        </section>

        <section className="preview">
          <div className="projectImage"></div>
          <article className="card">
            <h2 className="card__projectTitle">
              <span className="card__projectTitle--text">
                Personal project card
              </span>
            </h2>

            <div className="card__author">
              <div className="card__authorPhoto"></div>
              <p className="card__job">{authorJob}</p>
              <h3 className="card__name">{authorName}</h3>
            </div>

            <div className="card__project">
              <h3 className="card__name">{nameProject}</h3>
              <p className="card__slogan">{sloganProject}</p>
              <h3 className="card__descriptionTitle">Product description</h3>
              <p className="card__description">
                {/* Lorem ipsum dolor, sit amet consectetur adipisicing elit. Nulla,
                quos? Itaque, molestias eveniet laudantium adipisci vitae
                ratione */}
                {description}
              </p>

              <div className="card__technicalInfo">
                <p className="card__technologies">{technologies}</p>

                <a
                  className="icon icon__www"
                  href="#"
                  title="Haz click para ver el proyecto online"
                >
                  Web link
                </a>
                <a
                  className="icon icon__github"
                  href="#"
                  title="Haz click para ver el código del proyecto"
                >
                  GitHub link
                </a>
              </div>
            </div>
          </article>
        </section>

        <form action="" className="addForm">
          <h2 className="title">Información</h2>
          <fieldset className="addForm__group">
            <legend className="addForm__title">
              Cuéntanos sobre el proyecto
            </legend>
            <input
              className="addForm__input"
              type="text"
              name="name"
              id="name"
              placeholder="Nombre del proyecto"
              onChange={handleChangeProject}
            />
            <input
              className="addForm__input"
              type="text"
              name="slogan"
              id="slogan"
              placeholder="Slogan"
              onChange={handleChangeSlogan}
            />
            <div className="addForm__2col">
              <input
                className="addForm__input"
                type="url"
                name="repo"
                id="repo"
                placeholder="Repositorio"
              />
              <input
                className="addForm__input"
                type="url"
                name="demo"
                id="demo"
                placeholder="Demo"
              />
            </div>
            <input
              className="addForm__input"
              type="text"
              name="technologies"
              id="technologies"
              placeholder="Tecnologías"
              onChange={handleChangeTechnologies}
            />
            <textarea
              className="addForm__input"
              type="text"
              name="desc"
              id="desc"
              placeholder="Descripción"
              rows="5"
              onChange={handleChangeDescription}
            ></textarea>
          </fieldset>

          <fieldset className="addForm__group">
            <legend className="addForm__title">
              Cuéntanos sobre la autora
            </legend>
            <input
              className="addForm__input"
              type="text"
              name="autor"
              id="autor"
              placeholder="Nombre"
              onChange={handleChangeAuthor}
            />
            <input
              className="addForm__input"
              type="text"
              name="job"
              id="job"
              placeholder="Trabajo"
              onChange={handleChangeJob}
            />
          </fieldset>

          <fieldset className="addForm__group--upload">
            <label htmlFor="image" className="button">
              Subir foto del proyecto
            </label>
            <input
              className="addForm__hidden"
              type="file"
              name="image"
              id="image"
            />
            <label htmlFor="photo" className="button">
              Subir foto de la autora
            </label>
            <input
              className="addForm__hidden"
              type="file"
              name="photo"
              id="photo"
            />
            <button className="button--large">Guardar proyecto</button>
          </fieldset>
        </form>
      </main>
      <Footer />
    </div>
  );
}

export default App;
