import { useTranslation } from "react-i18next";


export default function ViewProject({ setActivePage, project }) {
    const { t } = useTranslation();

    return (
        <button
            onClick={() => setActivePage(project)}>
            {t("project-card.view-button")} →
        </button>
    );
}