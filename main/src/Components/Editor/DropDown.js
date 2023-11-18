import React from 'react'
import '../../ComponentsCSS/Editor/Dropdown.css'


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
