import Header from "./components/header";
import { CORE_CONCEPTS } from "./data.js";
import CoreConcept from "./components/CoreConcept";
import TabButton from "./components/TabButton.jsx";
import { EXAMPLES } from "./data.js";
import { useState } from "react";




function App() {
  const [ selectedTopic, setSelectedTopic ] = useState();
  function handleClick(selectedButton) {
    setSelectedTopic(selectedButton);  
    // selectedButtons => 'components' , 'props', 'jsx', 'state'
  }
  
  return (
    <div>
      <Header />
      <main>
        <section id='core-concepts'>
            <ul>
              {CORE_CONCEPTS.map(conceptItem =>  <CoreConcept key={conceptItem.title} {...conceptItem}/>)}
            </ul>
        </section>
        <section id='examples'>
        <h2>Examples</h2>
        <menu>
          <TabButton isSelected={selectedTopic === 'components'} onSelect={() => handleClick('components')}>Component</TabButton>
          <TabButton isSelected={selectedTopic === 'jsx'} onSelect={() => handleClick('jsx')}>JSX</TabButton>
          <TabButton isSelected={selectedTopic === 'props'} onSelect={() => handleClick('props')}>Props</TabButton>
          <TabButton isSelected={selectedTopic === 'state'} onSelect={() => handleClick('state')}>State</TabButton>
        </menu>
        </section>
          {!selectedTopic ? <p>Please Select a Topic</p> : <section id="tab-content">
          <h3>{EXAMPLES[selectedTopic].title}</h3>
          <p>{EXAMPLES[selectedTopic].description}</p>
          <pre>
            <code>{EXAMPLES[selectedTopic].code}</code>
          </pre>
        </section>}
        
      </main>
    </div>
  );
}

export default App;
