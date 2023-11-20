import React from 'react'
import '../../ComponentsCSS/Editor/RunButton.css'

/**
 * This component renders a button specific to the main Application, whenever click would run the
 * new graphiz data.
 * 
 * Props:
 * - runData (function): whenever the onClick happens, call this function to run data.
 */

function RunButton({runData}) {
  return (
    <button
        className="run-button"
        onClick={runData}
      >
        <i class="fa-solid fa-play"></i>
        Run
    </button>
  )
}

export default RunButton