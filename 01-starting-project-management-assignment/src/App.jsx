import { useState } from "react";
import NewProject from "./components/NewProject";
import NoProjectSelected from "./components/NoProjectSelected";
import ProjectsSideBar from "./components/ProjectsSideBar";
import SelectedProject from "./components/SelectedProject";
function App() {

  const [projectState,setProjectState] = useState({
    selectedProjectId:undefined,
    projects: [],
    tasks: []
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

  function handleDeleteProject() {
    setProjectState( prevState => {
      return {
        ...prevState,
        selectedProjectId: undefined,
        projects: prevState.projects.filter(
          (project) => project.id !== prevState.selectedProjectId
        ),
      }
    })
  }

  function handleAddTask(text) {
    setProjectState( prevState => {
      const newTask = {
        text:text,
        projectId: prevState.selectedProjectId,
        id: Math.round(Math.random()*100)
      }
      return {
        ...prevState,
        tasks: [newTask,...prevState.tasks]
      }
  })
}

  console.log(projectState);
  const selectedProject = projectState.projects.find(project => project.id === projectState.selectedProjectId)
  let content = <SelectedProject 
                  onDelete={handleDeleteProject} 
                  project={selectedProject}
                  addTask={handleAddTask}
                  tasks={projectState.tasks}
                   />;
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
