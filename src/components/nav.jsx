import { useTranslation } from "react-i18next"

export default function Nav({ setActivePage, activePage }) {
    const { t } = useTranslation();

    const clickSound = new Audio("/click.mp3");

    return (
        <nav>
            <ul>
                <li>
                    <button
                        className={`button ${activePage === "about" ? "active" : ""}`}
                        onClick={() => {
                            setActivePage("about"),
                                clickSound.play();
                        }}>
                        {t("nav.about-me")}
                    </button>
                </li>
                <li>
                    <button
                        className={`button ${activePage === "projects" ? "active" : ""}`}
                        onClick={() => {
                            setActivePage("projects"),
                                clickSound.play();
                        }}>
                        {t("nav.projects")}
                    </button>
                </li>
                <li>
                    <button
                        className={`button ${activePage === "contact" ? "active" : ""}`}
                        onClick={() => {
                            setActivePage("contact"),
                                clickSound.play();
                        }}>
                        {t("nav.contact")}
                    </button>
                </li>
            </ul>
        </nav >
    );
}