import ViewProject from "./viewProject";

export default function ProjectCard({
    title,
    description,
    project,
    setActivePage,
    thumb
}) {

    return (

        <article className="project-card">

            <img src={thumb} alt="" />

            <div className="card-container">
                <div>
                    <h2>{title}</h2>

                    <p>{description}</p>
                </div>

                <ViewProject
                    setActivePage={setActivePage}
                    project={project} />
            </div>
        </article>
    )

}