import { useState, useEffect, useRef } from 'react';
import { Graphviz } from 'graphviz-react';
import '../../ComponentsCSS/Graphiz/Graph.css'
import ErrorBoundery from '../ErrorBoundery/ErrorBoundery'

export default function Graph({ GraphData, runData }) {
    const [width, setWidth] = useState(null)
    const divRef = useRef(null)

    useEffect(() => {
        if (divRef.current) {
            setWidth(divRef.current.offsetWidth)
        }
    })

    return (
        <div
            className='data-box'
            ref={divRef}
        >
            <ErrorBoundery 
                fallback="error"
                runData={runData}
                key={GraphData}
            >
                <Graphviz 
                    className='graphiz-data'
                    dot = {GraphData ? GraphData : "graph { }"} 
                    options={
                        { 
                            
                            fit: true,
                            zoom: true, 
                            width: {width}, 
                            height: window.innerHeight - 5,
                            useWorker: false 
                        }
                    }
                />
            </ErrorBoundery>
        </div>
    )
}
