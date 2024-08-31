import { EXAMPLES } from "../../data";
import { useState } from "react";
import TabButton from "./TabButton";
import Section from "./Section";
import Tabs from "./Tabs";

export default function Examples(){
  
  let tabContent = <p>Please select a topic</p>
  const[selectedTopic, setSelectedTopic] = useState()

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
      <Section title="Examples" id="examples">
        <Tabs 
        ButtonContainer="menu"
        buttons={
          <>
            <TabButton isSelected={selectedTopic === 'components'} label="Component" onClick={() => handleClick('components')}/>
            <TabButton isSelected={selectedTopic === 'jsx'} label="JSX" onClick={() => handleClick('jsx')}/>
            <TabButton isSelected={selectedTopic === 'props'} label="Props" onClick={() => handleClick('props')}/>
            <TabButton isSelected={selectedTopic === 'state'} label="State" onClick={() => handleClick('state')}/>
          </>} >
          {tabContent}
        </Tabs>
        <menu>
        </menu>
        
      </Section>
    );

}