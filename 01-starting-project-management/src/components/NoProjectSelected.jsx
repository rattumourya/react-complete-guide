import notepadIcon from "../assets/notepad-icon.png";
export default function NoProjectSelected() {
    return (
        <section className="text-center pt-16">
            <img src={notepadIcon} className="m-auto"  alt="notepad" />
            <p className="mt-3 mb-3 font-semibold text-xl">No project selected</p>
            <p className="mt-3 mb-3">Select a  project or get started with new one</p>
            <button className="bg-gray-500  rounded-lg pt-2 pb-2 pr-4 pl-4 mt-5 text-white">Create new project</button>
      </section>
    )
}