import { useTranslation } from "react-i18next";
import profilePhoto from "../assets/default-pfp.jpeg";

export default function Sidebar() {

    const { t } = useTranslation();

    return (
        <aside className="info-section">
            <img src={profilePhoto} alt="profile photo" />
            <h2>{t("sidebar.title")}</h2>
            <p>{t("sidebar.description")}</p>

        </aside>

    )
}