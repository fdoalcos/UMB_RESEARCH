import React from 'react'
import 'codemirror/lib/codemirror.css'
import 'codemirror/theme/material.css'
import 'codemirror/mode/javascript/javascript'
import 'codemirror/mode/css/css'
import '../../ComponentsCSS/Editor/TextEditor.css'
import DropDown from './DropDown'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faJsSquare } from '@fortawesome/free-brands-svg-icons';


import { Controlled as ControlledEditor } from 'react-codemirror2'

export default function TextEditor({ language, value, setJs, dataJson, setSelected, setGraphData, key }) {

    function handleChange(editor, data, value) {
        setJs(value)
    }

    return (
    <div className="editor-container">
        <div className="editor-header">
            <div className="editor-header-dropdown">
                <FontAwesomeIcon
                    icon={faJsSquare} 
                    className="editor-icon"
                /> 
                <DropDown 
                    DataSets={dataJson}
                    setSelected={setSelected}
                    setJs={setJs}
                    setGraphData={setGraphData}
                    key={dataJson}
                />
            </div>
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
