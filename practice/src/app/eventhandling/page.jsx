'use client'
import React from 'react'

const Eventhandling = () => {
  return (
    <div>
        <h1>Eventhandling</h1>
        <button className='border bg-red-500 text-white p-5 rounded-full ' onClick={() => {alert("this is a notification")}}>click me</button>
    </div>
  )
}

export default Eventhandling