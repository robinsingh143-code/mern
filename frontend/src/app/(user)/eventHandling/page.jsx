'use client'
import React from 'react'

const EventHandling = () => {
  return (
    <div className='py-20 flex flex-col items-center '>
        <h1 className='text-center front-bold text-4xl mb-10'>event Handling</h1>
        <button className='border bg-red-500 text-white p-5 rounded-full ' onClick={() => {alert("this is a notification")}}>click me</button>
    </div>
  )
}

export default EventHandling 