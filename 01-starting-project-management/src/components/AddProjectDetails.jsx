import DueDatePicker from "./DueDatePicker"

export default function AddProjectDetails() {
    return (
        <section className="pt-16 pr-32">
            <p className="text-right"> 
                <button className="bg-gray-200 hover:bg-gray-100 text-black rounded-lg  pt-1 pb-1 pr-3 pl-3 mr-2">Cancel</button> 
                <button className="bg-slate-950 hover:bg-slate-600  text-white rounded-lg  pt-1 pb-1 pr-3 pl-3">Save</button> 
            </p>
            <form action="">
                <label htmlFor="title" className="uppercase text-sm">Title</label>
                <input type="text" id="title" name="title" className="w-full focus:border-none p-1" />
                <br /><br />
                <label htmlFor="title" className="uppercase text-sm">Description</label>
                <input type="description" id="description" name="description" className="w-full p-1" />
                <br /><br />
                <label htmlFor="due-date" className="uppercase text-sm">Due Date</label>
                <span className="w-full">
                    <DueDatePicker />
                </span>

            </form>
        </section>
    )
}