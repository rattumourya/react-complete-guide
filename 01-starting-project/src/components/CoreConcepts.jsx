import { CORE_CONCEPTS } from "../data";
import CoreConcept from "../components/CoreConcept";

export default function CoreConcepts() {
    return (
        <section id='core-concepts'>
        <h2>Time to get started!</h2>
        <ul>
         {CORE_CONCEPTS.map((conceptItem) => (
          <CoreConcept key={conceptItem.title} {...conceptItem}></CoreConcept>
         ))}
        </ul>
      </section>
    );
}