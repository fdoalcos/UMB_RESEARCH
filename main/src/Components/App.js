import { useState } from 'react'
import '../ComponentsCSS/App.css'
import TextEditor from './Editor/TextEditor';
import Graph from './Graphiz/Graph';
import dataJson from '../Components/Graphiz/Data/Dataset.json'
import DropDown from './Editor/DropDown';
import SplitPane from 'react-split-pane'

function App() {
  const [selected, setSelected] = useState("data1")
  const [js, setJs] = useState(dataJson[selected])
  const [graphData, setGraphData] = useState(dataJson[selected])
  
  function runData() {
    setGraphData(js)
  }

  return (
    <>
      <button
        onClick={runData}
      >
        Run
      </button>
      <DropDown 
          DataSets={dataJson}
          setSelected={setSelected}
          setJs={setJs}
          setGraphData={setGraphData}
          key={dataJson}
      />
        <SplitPane
          split="vertical"
          defaultSize={Math.floor(window.innerWidth / 2)}
          minSize={50}
          maxSize={-10}
        >
          <TextEditor 
            language="javascript"
            displayName="header"
            value={js}
            onChange={setJs}
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
