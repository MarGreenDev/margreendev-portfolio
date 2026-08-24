import { useTranslation } from "react-i18next"

export default function Nav({ setActivePage }) {
    const { t } = useTranslation();

    return (
        <nav>
            <ul>
                <li>
                    <button onClick={() => setActivePage("about")}>
                        {t("nav.about-me")}
                    </button>
                </li>
                <li><button onClick={() => setActivePage("projects")}>{t("nav.projects")}</button></li>
                <li><button onClick={() => setActivePage("contact")}>{t("nav.contact")}</button></li>
            </ul>
        </nav>
    );
}