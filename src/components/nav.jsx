import { useTranslation } from "react-i18next"

export default function Nav({ setActivePage, activePage }) {
    const { t } = useTranslation();

    return (
        <nav>
            <ul>
                <li>
                    <button
                        className={`button ${activePage === "about" ? "active" : ""}`}
                        onClick={() => {
                            setActivePage("about");
                        }}>
                        {t("nav.about-me")}
                    </button>
                </li>
                <li>
                    <button
                        className={`button ${activePage === "projects" ? "active" : ""}`}
                        onClick={() => setActivePage("projects")}>
                        {t("nav.projects")}
                    </button>
                </li>
                <li>
                    <button
                        className={`button ${activePage === "contact" ? "active" : ""}`}
                        onClick={() => setActivePage("contact")}>
                        {t("nav.contact")}
                    </button>
                </li>
            </ul>
        </nav >
    );
}