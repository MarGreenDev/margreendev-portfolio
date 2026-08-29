import ProjectCard from "../components/projectCard"

export default function Projects({ setActivePage }) {

    return (
        <>
            <h3>PROJECTS</h3>

            <ProjectCard
                title="Tic-Tac-Toe"
                description="My first project."
                project="tictactoe"
                setActivePage={setActivePage}
            />
        </>
    )
}