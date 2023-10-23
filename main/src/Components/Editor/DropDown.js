import React from 'react'

export default function DropDown({ DataSets, setSelected }) {
  return (
    <div>
        <select
                onChange={(e) => {
                    setSelected(e.target.value)
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
