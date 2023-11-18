import React from 'react'
import '../../ComponentsCSS/Editor/RunButton.css'

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