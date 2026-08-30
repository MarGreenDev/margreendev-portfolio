import { useTranslation } from "react-i18next"
import ProjectCard from "../components/projectCard"

export default function Projects({ setActivePage }) {
    const { t } = useTranslation();

    return (
        <>
            <h3>PROJECTS</h3>

            <div className="cards-container">
                <ProjectCard
                    title={t("project-card.tictactoe.title")}
                    description={t("project-card.tictactoe.description")}
                    project="tictactoe"
                    setActivePage={setActivePage}
                    thumb={"/thumbnails/tictactoe-thumb.png"}
                />

                <ProjectCard
                    title="softwire"
                    description="myspace inspired social website"
                    project="softwire"
                    setActivePage={setActivePage}
                    thumb={"/thumbnails/softwire-thumb.png"}
                />

            </div>
        </>
    )
}