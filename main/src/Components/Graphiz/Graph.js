import React from 'react'
import { Graphviz } from 'graphviz-react';
import '../../ComponentsCSS/Graphiz/Graph.css'
import ErrorBoundery from '../ErrorBoundery/ErrorBoundery'

export default function Graph({ GraphData }) {
    return (
        <div
            className='data-box'
        >
            <ErrorBoundery fallback="error">
                <Graphviz 
                    dot = {GraphData} 
                    options={
                        { 
                            zoom: false, 
                            width: 700, 
                            height: window.innerHeight - 100,
                            useWorker: false 
                        }
                    }
                />
            </ErrorBoundery>
        </div>
    )
}
