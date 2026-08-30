import { useTranslation } from "react-i18next"
import ProjectCard from "../components/projectCard"

export default function Projects({ setActivePage }) {
    const { t } = useTranslation();

    return (
        <>
            <h3>PROJECTS</h3>

            <ProjectCard
                title={t("project-card.tictactoe.title")}
                description={t("project-card.tictactoe.description")}
                project="tictactoe"
                setActivePage={setActivePage}
                thumb={"/thumbnails/tictactoe-thumb.png"}
            />
        </>
    )
}