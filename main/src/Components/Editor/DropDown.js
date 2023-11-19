import React from 'react'
import '../../ComponentsCSS/Editor/Dropdown.css'

/**
 * This component renders a dropdown button that is used in TextEditor components.
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
