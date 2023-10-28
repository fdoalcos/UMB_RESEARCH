import EditorCode from './Editor/EditorCode';
import { useState, useEffect, useRef, useSyncExternalStore, useCallback } from 'react'
import '../ComponentsCSS/App.css'
import TextEditor from './Editor/TextEditor';
import Graph from './Graphiz/Graph';
import ErrorBoundery from './ErrorBoundery/ErrorBoundery';
import dataJson from '../Components/Graphiz/Data/Dataset.json'
import DropDown from './Editor/DropDown';
import SplitPane from 'react-split-pane'

function App() {
  const [selected, setSelected] = useState("data1")
  const [js, setJs] = useState(dataJson[selected])
  const [graphData, setGraphData] = useState(dataJson[selected])
  


  function runData() {
    console.log("THIS IS JS", js)
    console.log("THIS IS DATA", dataJson)
    console.log("I am selected", selected)
    console.log(dataJson[selected])
    setGraphData(js)
  }


  // for timeout purposes
  // if ever I want to make it sync
  // useEffect(() => {
  //   const timeout = setTimeout(() => {

  //   }, 250)
  // }, js)


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
      {/* <div className="main-column">  */}
        <SplitPane
          split="vertical"
          defaultSize={Math.floor(window.innerWidth / 2)}
          minSize={50}
          maxSize={-10}
        >
          <div className="topPane">
            <TextEditor 
              language="javascript"
              displayName="header"
              value={js}
              onChange={setJs}
            />
          </div>
          <Graph 
            GraphData={graphData}
            runData={runData}
          />
        </SplitPane>
      {/* </div> */}
    </>
  );
}

export default App;
