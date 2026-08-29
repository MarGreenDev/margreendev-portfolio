import ViewProject from "./viewProject";

export default function ProjectCard({
    title,
    description,
    project,
    setActivePage
}) {

    return (

        <article className="project-card">

            <img src="https://placehold.co/100" alt="PLACEHOLDER" />

            <div>
                <h2>{title}</h2>

                <p>{description}</p>
            </div>

            <ViewProject
                setActivePage={setActivePage}
                project={project} />

        </article>
    )

}