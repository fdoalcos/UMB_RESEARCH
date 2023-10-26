import EditorCode from './Editor/EditorCode';
import { useState, useEffect } from 'react'
import '../ComponentsCSS/App.css'
import TextEditor from './Editor/TextEditor';
import Graph from './Graphiz/Graph';

function App() {
  const data = "graph {\n    grandparent -- \"parent A\";\n    child;\n    \"parent B\" -- child;\n    grandparent --  \"parent B\";\n}"
  const [js, setJs] = useState("graph {\n    grandparent -- \"parent A\";\n    child;\n    \"parent B\" -- child;\n    grandparent --  \"parent B\";\n}")
  const [graphData, setGraphData] = useState("graph {\n    grandparent -- \"parent A\";\n    child;\n    \"parent B\" -- child;\n    grandparent --  \"parent B\";\n}")

  function runData() {
    setGraphData(js)
  }


  // for timeout purposes
  // useEffect(() => {
  //   const timeout = setTimeout(() => {

  //   }, 250)
  // }, js)


  return (
    // this is before
    // <div className="main">
    //   <EditorCode />
    // </div>
    <>
      <button
        onClick={runData}
      >
        Run
      </button>
      <div className="main-column"> 
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
        />
      </div>
     
      <div className="pane">
        {/* <iframe
          title="output"
          sandbox="allow-scripts"
          frameBorder="0"
          width="100%"
          height="100%"
        
        >
        </iframe>
         */}
      </div>
    </>
  );
}

export default App;
