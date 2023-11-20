import React from 'react'
import '../../ComponentsCSS/Editor/Dropdown.css'

/**
 * The DropDown component is responsible for rendering a dropdown menu which 
 * is located near the text editor. This allows users to select from a lists of
 * DataSets, whenever the user selected the DataSets, it would just send the file 
 * to the DataSets
 * 
 * Props:
 * - DataSets (string): The json data here.
 * - setGraphData (function): to set graph data.
 * - setSelected (function): to select the data in our dropdown.
 * - setJs (function): to call the js state and change its value.
 */

export default function DropDown({ DataSets, setSelected, setJs, setGraphData }) {
  return (
    <div >
        <select
                className='dropdown'
                onChange={(e) => {
                    setSelected(e.target.value)
                    setJs(DataSets[e.target.value])
                    setGraphData(DataSets[e.target.value])
                }}
            >
                {
                    Object.keys(DataSets).map((key, val) => {
                        return (
                            <>
                                <option
                                    className="dropdown-option"
                                    key = {val}
                                    value = {key}
                                >
                                    
                                    {key} 
                                </option>
                            </>
                            
                        )
                    }) 
                }   
            </select>
    </div>
  )
}
