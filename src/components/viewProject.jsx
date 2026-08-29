

export default function ViewProject({ setActivePage, project }) {

    return (
        <button
            onClick={() => setActivePage(project)}>
            view project
        </button>
    );
}