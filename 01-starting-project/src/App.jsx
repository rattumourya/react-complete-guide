import { CORE_CONCEPTS } from './data.js';
import Header from "./components/Header/Header.jsx"
import CoreConcepts from './components/CoreConcepts.jsx';
import TabButton from './components/TabButton.jsx';
import { useState } from 'react';

function App() {
  console.log("calling app");
  var [selectedTopic,setSelectedTopic] = useState('Please click a button');

  function handleSelect(selectedButton) {
    setSelectedTopic(selectedButton)
    console.log(selectedTopic);
  }

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
        <section id="examples">
          <h2>Examples</h2>
          <menu>
            <TabButton onSelect={() => handleSelect("Components")}>Components</TabButton>
            <TabButton onSelect={() => handleSelect("JSX")}>JSX</TabButton>
            <TabButton onSelect={() => handleSelect("Props")}>Props</TabButton>
            <TabButton onSelect={() => handleSelect("State")}>State</TabButton>
          </menu>
          {selectedTopic}
        </section>
      </main>
    </div>
  );
}

export default App;
