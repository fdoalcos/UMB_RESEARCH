import React from 'react'
import '../../ComponentsCSS/Editor/EditorCode.css'
import DataSets from '../Graphiz/Data/Dataset.json'
import Editor from './Editor'

export default function EditorCode() {
  return (
    <div
        className='editor-code-box'
    >
        <Editor 
            DataSets={DataSets}
        />
    </div>
  )
}
