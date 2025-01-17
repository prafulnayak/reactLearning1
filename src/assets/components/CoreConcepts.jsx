import CoreConcept from "./CoreConcept";
import { CORE_CONCEPTS } from "../../data";

export default function CoreConcepts() {
    return (
        <section id="core-concepts">
          <h2>Core Concept</h2>
          <ul>
            {CORE_CONCEPTS.map((concepts) => <CoreConcept key={concepts.title} {...concepts} />)}
          </ul>
        </section>
    );
}