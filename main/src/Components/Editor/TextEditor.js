import React from 'react'
import 'codemirror/lib/codemirror.css'
import 'codemirror/theme/material.css'
import 'codemirror/mode/javascript/javascript'
import 'codemirror/mode/css/css'
import '../../ComponentsCSS/Editor/TextEditor.css'
import DropDown from './DropDown'


import { Controlled as ControlledEditor } from 'react-codemirror2'

export default function TextEditor({ language, value, setJs, dataJson, setSelected, setGraphData, key }) {

    function handleChange(editor, data, value) {
        setJs(value)
    }

    return (
    <div className="editor-container">
        <div className="editor-header">
            {/* need to add dropdown button here to make much more reusable */}
            {/* need to change the dropdown button from app.js to here */}
            {/* <DropDown /> */}
            <DropDown 
                DataSets={dataJson}
                setSelected={setSelected}
                setJs={setJs}
                setGraphData={setGraphData}
                key={dataJson}
            />
        </div>
        <ControlledEditor 
            onBeforeChange={handleChange}
            value={value}
            className="code-mirror-wrapper"
            options={{
                lineWrapping: true,
                lint: true,
                mode: language,
                theme: 'default',
                lineNumbers: true
            }}
        />
    </div>
    )
}
