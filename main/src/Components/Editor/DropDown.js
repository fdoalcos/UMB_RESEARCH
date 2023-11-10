import React from 'react'

export default function DropDown({ DataSets, setSelected, setJs, setGraphData }) {
  return (
    <div>
        <select
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
