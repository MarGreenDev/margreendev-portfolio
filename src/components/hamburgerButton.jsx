

export default function HamburgerButton({ onClick, isOpen }) {

    return (
        <button className="hamburger-button" onClick={onClick}>
            {isOpen ? "X" : "☰"}
        </button>
    )
}