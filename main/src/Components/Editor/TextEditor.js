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

/**
 * This component renders the text editor of the app using react-codemirror2 for its version control.
 * Whatever the users type here would affect the Graphiz data and might be an error for us
 * 
 * Functions:
 * - handleChange(): the purpose is to setJs whenever the data is changed by the user in the text editor.
 * 
 * Props:
 * - language (string): the language is javascript for this one.
 * - value (json object): the default value in the text editor.
 * - setJs (function): to call the js state and change its value.
 * - dataJson (json object): the data json in our object
 * - setSelected (function): to select the data in our dropdown.
 * - setGraphData (function): to set graph data
 * - key (string): isnt really used/might need to delete
 */

export default function TextEditor({ language, value, setJs, dataJson, setSelected, setGraphData, key }) {

    function handleChange(editor, data, value) {
        console.log("THIS IS THE VALUE,", value)
        setJs(value)
    }

    return (
    <div 
        className="editor-container"
    >
        <div 
            className="editor-header"
        >
            <div 
                className="editor-header-dropdown"
            >
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
