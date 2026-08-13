import { useTranslation } from "react-i18next"

export default function Nav() {
    const { t } = useTranslation();

    return (
        <nav>
            <ul>
                <li><a href="#">{t("nav.about-me")}</a></li>
                <li><a href="#">{t("nav.projects")}</a></li>
                <li><a href="#">{t("nav.contact")}</a></li>
            </ul>
        </nav>
    );
}