import { useState } from "react";
import NewProject from "./components/NewProject";
import NoProjectSelected from "./components/NoProjectSelected";
import ProjectsSideBar from "./components/ProjectsSideBar";
import SelectedProject from "./components/SelectedProject";
function App() {

  const [projectState,setProjectState] = useState({
    selectedProjectId:undefined,
    projects: []
  });

  function handleStartAddProject() {
    setProjectState( prevState => {
      return {
        ...prevState,
        selectedProjectId: null,
      }
    })
  }

  function handleSelectedProject(id) {
    setProjectState( prevState => {
      return {
        ...prevState,
        selectedProjectId: id,
      }
    })
  }

  

  function handleCancelProject() {
    setProjectState( prevState => {
      return {
        ...prevState,
        selectedProjectId: undefined,
      }
    })
  }

    function handleAddProject(projectData) {
      setProjectState( prevProject => {
          const newProject = {
            ...projectData,
            id: Math.round(Math.random()*100)
          }
          return {
            ...prevProject,
            selectedProjectId: undefined,
            projects: [...prevProject.projects,newProject]
          }
      })
  }
  console.log(projectState);
  const selectedProject = projectState.projects.find(project => project.id === projectState.selectedProjectId)
  let content = <SelectedProject project={selectedProject} />;
   if(projectState.selectedProjectId === null)
   {
      content = <NewProject onAdd={handleAddProject} onCancel={handleCancelProject} />;
   }else if(projectState.selectedProjectId === undefined){
      content = <NoProjectSelected onStartAddProject={handleStartAddProject} />;
   }

  
  return (
    <main className="h-screen my-8 flex gap-8">
      <ProjectsSideBar 
          onStartAddProject={handleStartAddProject} 
          projects={projectState.projects}
          onSelectedProject={handleSelectedProject}
          selectedProjectId={projectState.selectedProjectId}
          />
      { content }
    </main>
  );
}

export default App;
