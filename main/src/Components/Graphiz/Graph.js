import { useState, useEffect, useRef } from 'react';
import { Graphviz } from 'graphviz-react';
import '../../ComponentsCSS/Graphiz/Graph.css'
import ErrorBoundery from '../ErrorBoundery/ErrorBoundery'

/**
 * This component renders the graphiz data in our component which would show the
 * graphiz by the user contents or the data from the default dropdown value.
 * 
 * Functions:
 * - runData(): to run our data graphiz that is passed in our ErrorBoundary components for resetting the data.
 * 
 * Props:
 * - GraphData (string object): The contents for our graph data.
 */

export default function Graph({ GraphData, runData }) {
    const [width, setWidth] = useState(null)
    const divRef = useRef(null)
    const graphRef = useRef(null)

    useEffect(() => {
        if (divRef.current) {
            setWidth(divRef.current.offsetWidth)
        }
    }, [])

    return (
        <>
            <div 
                className="graph-header"
            >
                {/* main headder here */}
            </div>
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
                        ref={graphRef}
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
        </>
        
    )
}
