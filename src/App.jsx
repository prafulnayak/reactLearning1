import { useState } from "react";
import { CORE_CONCEPTS } from "./data";
import { EXAMPLES } from "./data";
import Header from "./assets/components/Header/Header";
import CoreConcept from "./assets/components/CoreConcept";
import TabButton from "./assets/components/TabButton";

function App() {
  const[selectedTopic, setSelectedTopic] = useState()

  let tabContent = <p>Please select a topic</p>

  if(selectedTopic){
    tabContent = 
    <div id="tab-content">
    <h3>{EXAMPLES[selectedTopic].title}</h3>
    <p>{EXAMPLES[selectedTopic].description}</p>
    <pre>
      <code>{EXAMPLES[selectedTopic].code}</code>
    </pre>
  </div>
  }
  function handleClick(selectedButton){
    setSelectedTopic(selectedButton)
    tabContent = selectedButton
}

  return (
    <div>
      <Header />
      <main>
        <section id="core-concepts">
          <h2>Core Concept</h2>
          <ul>
            {CORE_CONCEPTS.map((concepts) => <CoreConcept key={concepts.title} {...concepts} />)}
          </ul>
        </section>
        <section id="examples">
          <h2>Example</h2>
          <menu>
          <TabButton isSelected={selectedTopic === 'components'} label="Component" onSelect={() => handleClick('components')}/>
          <TabButton isSelected={selectedTopic === 'jsx'} label="JSX" onSelect={() => handleClick('jsx')}/>
          <TabButton isSelected={selectedTopic === 'props'} label="Props" onSelect={() => handleClick('props')}/>
          <TabButton isSelected={selectedTopic === 'state'} label="State" onSelect={() => handleClick('state')}/>
          </menu>
          {tabContent}
        </section>
        <h2>Time to get started!</h2>
      </main>
    </div>
  );
}

export default App;
