import { useTranslation } from "react-i18next";
import profilePhoto from "../assets/default-pfp.jpeg";

export default function Sidebar() {

    const { t } = useTranslation();

    return (
        <aside className="info-section">
            <img src={profilePhoto} alt="profile photo" className="profile-photo" />

            <div className="sidebar-title">
                <h2>{t("sidebar.title")}</h2>
                <p>{t("sidebar.description")}</p>
            </div>

            <div className="sidebar-links">
                <a className="link" href="https://github.com/MarGreenDev">
                    <img src="github.svg" alt="github link" />
                </a>
                <a className="link" href="https://www.linkedin.com/in/marylou-groeneveld-861111217/">
                    <img src="linkedin.svg" alt="linkedin link" />
                </a>
                <a className="link" href="mailto:marylougroeneveld@gmail.com">
                    <img src="mail.svg" alt="send e-mail" />
                </a>
            </div>

        </aside>

    )
}