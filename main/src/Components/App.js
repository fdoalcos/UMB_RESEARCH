import { useState } from 'react'
import '../ComponentsCSS/App.css'
import TextEditor from './Editor/TextEditor';
import Graph from './Graphiz/Graph';
import dataJson from '../Components/Graphiz/Data/Dataset.json'
import DropDown from './Editor/DropDown';
import SplitPane from 'react-split-pane'
import RunButton from './Editor/RunButton';

/**
 * This is the main component showing the App in our web broser.
 * 
 * Functions:
 * - runData(): its gonna send the string object or whatever the user types in the code editor and put it in our
 * graph data sets which would show the graphiz data
 * 
 * States:
 * - selected: whatever graph/data the user selected in the dropdown of our graph
 * - js: whatever the users type in our data
 * - graphData: shows what graph we are looking at using the selected data as well
 *
 */

function App() {
  const [selected, setSelected] = useState("Graph 1")
  const [js, setJs] = useState(dataJson[selected])
  const [graphData, setGraphData] = useState(dataJson[selected])
  
  function runData() {
    setGraphData(js)
  }

  return (
    <>
      <div className="flex-button">
        <RunButton 
          runData={runData}
        />
      </div>
      <SplitPane
        split="vertical"
        defaultSize={Math.floor(window.innerWidth / 2)}
        minSize={50}
        maxSize={-10}
      >
        <TextEditor 
          language="javascript"
          value={js}
          setJs={setJs}
          dataJson={dataJson}
          setSelected={setSelected}
          setGraphData={setGraphData}

        />
        <Graph 
          GraphData={graphData}
          runData={runData}
        />
      </SplitPane>
    </>
  );
}

export default App;
