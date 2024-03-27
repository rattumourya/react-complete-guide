import AddProjects from "./components/AddProjects";
import NoProjectSelected from "./components/NoProjectSelected";
function App() {
  return (
      <div className="h-dvh bg-gray-50 flex flex-row">
          <div className="grid grid-flow-col basis-1/3">
            <div className="bg-slate-950 rounded-tr-lg self-end text-white p-2" style={{height: '95%'}}>
               <AddProjects />
            </div>
          </div>
          <div className="bg-gray-50 basis-2/3  ml-4">
            <NoProjectSelected />
          </div>
      </div>
  );
}

export default App;
