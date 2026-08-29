import ViewProject from "./viewProject";

export default function ProjectCard({
    title,
    description,
    project,
    setActivePage
}) {

    return (

        <article className="project-card">
            <h2>{title}</h2>

            <p>{description}</p>

            <ViewProject
                setActivePage={setActivePage}
                project={project} />

        </article>
    )

}