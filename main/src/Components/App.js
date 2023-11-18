import { useState } from 'react'
import '../ComponentsCSS/App.css'
import TextEditor from './Editor/TextEditor';
import Graph from './Graphiz/Graph';
import dataJson from '../Components/Graphiz/Data/Dataset.json'
import DropDown from './Editor/DropDown';
import SplitPane from 'react-split-pane'
import RunButton from './Editor/RunButton';
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
// import { fab } from '@fortawesome/free-brands-svg-icons'
// import { faCoffee, faJ } from '@fortawesome/free-solid-svg-icons'



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
