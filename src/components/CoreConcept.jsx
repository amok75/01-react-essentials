import { CoreConcepts } from "./CoreConcepts";
import { CORE_CONCEPTS } from "../data";

export default function CoreConcept() {
  return (
    <section id="core-concepts">
      <ul>
        {CORE_CONCEPTS.map((item) => (
          <CoreConcepts {...item} key={item.title} />
        ))}
      </ul>
    </section>
  );
}
