import { useTranslation } from "react-i18next"
import HamburgerButton from "./hamburgerButton";
import MobileMenu from "./mobileMenu";
import { useState } from "react";

export default function Nav({ setActivePage, activePage }) {
    const { t } = useTranslation();

    const [menuOpen, setMenuOpen] = useState(false);

    const clickSound = new Audio("/click.mp3");

    return (
        <>
            <nav className="desktop-nav">
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


            <nav className="mobile-nav">
                <HamburgerButton
                    isOpen={menuOpen}
                    onClick={() => setMenuOpen(!menuOpen)}
                />

                <MobileMenu isOpen={menuOpen}
                    setActivePage={setActivePage}
                    activePage={activePage} />
            </nav>
        </>
    );
}