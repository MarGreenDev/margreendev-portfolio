

export default function HamburgerButton({ onClick, isOpen }) {

    return (
        <button onClick={onClick}>
            {isOpen ? "X" : "☰"}
        </button>
    )
}