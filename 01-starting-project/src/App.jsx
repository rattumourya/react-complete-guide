import { CORE_CONCEPTS } from './data.js';
import Header from "./components/Header.jsx"
import CoreConcepts from './components/CoreConcepts.jsx';

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
