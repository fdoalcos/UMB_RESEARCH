import React, { useState } from 'react'
import Data from './Data'
import Graph from '../Graphiz/Graph'
import DropDown from './DropDown'
import '../../ComponentsCSS/Editor/Editor.css'

export default function Editor({ DataSets }) {
    
    const [selected, setSelected] = useState("data1")

    return (
        <div>
            <DropDown
                DataSets={DataSets}
                setSelected={setSelected}
            />
            <div className='editor-col'>
                <Data 
                    GraphData={DataSets[selected]}
                />
                <Graph 
                    GraphData={DataSets[selected]}
                />
            </div>
            
        </div>
        )
}
