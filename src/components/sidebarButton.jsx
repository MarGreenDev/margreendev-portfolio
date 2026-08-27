import { useTranslation } from "react-i18next"


export default function SidebarButton({ onClick, isOpen }) {

    const { t } = useTranslation();

    return (
        <button className="sidebar-button" onClick={onClick}>
            {isOpen ? t("sidebar.button.close") : t("sidebar.button.open")}
        </button>
    )
}