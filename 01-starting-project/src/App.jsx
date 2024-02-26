import reactImg  from './assets/react-core-concepts.png';
import { CORE_CONCEPTS } from './data.js';
const reactDescription = ['Fundamental','crucial','Core'];

function getRandomInt(max)
{
  return Math.floor(Math.random()*(max+1));
}
function Header() {
  return (
    <header>
      <img src={reactImg} alt="Stylized atom" />
      <h1>React Essentials</h1>
      <p>
        {reactDescription[getRandomInt(2)]} React concepts you will need for almost any app you are
        going to build!
      </p>
    </header>
  )
}

function CoreConcepts({title,description,image}) {
  return (
    <li>
        <img src={image} alt={title} />
        <h3>{title}</h3>
        <p>{description}</p>
    </li>
  )
}
function App() {
  return (
    <div>
      <Header/>
      <main>
        <section id='core-concepts'>
          <h2>Time to get started!</h2>
          <ul>
            <CoreConcepts {...CORE_CONCEPTS[0]} />

            <CoreConcepts {...CORE_CONCEPTS[1]} />

            <CoreConcepts 
                title={CORE_CONCEPTS[2].title}
                description={CORE_CONCEPTS[2].description}
                image={CORE_CONCEPTS[2].image} />
            <CoreConcepts {...CORE_CONCEPTS[3]} />

          </ul>
        </section>
      </main>
    </div>
  );
}

export default App;
