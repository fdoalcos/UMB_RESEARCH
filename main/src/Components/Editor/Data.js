import React from 'react'

export default function Data({ GraphData }) {
  return (
    <div
        className='data-box'
    >
        <p>
            { GraphData }
        </p>
    </div>
  )
}
