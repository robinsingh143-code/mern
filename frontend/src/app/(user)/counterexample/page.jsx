'use client';
import React ,{useState} from 'react'

const CounterExample = () => {
    const [count, setCount] = useState(0)

    const handleIncrement = ()=> {
        setCount(count+1)
    }
    const handleDecrement= ()=>{
        setCount(count-1)
    }
    const handleReset= ()=>
    {
        setCount(0)
    }
  return (
    <div className='flex flex-col justify-center items-center py-20'>
        <h1 className='font-bold text-4xl'>Count Handing</h1>
        <h4>number of count : {count}</h4>
        <div>
        <button onClick={handleIncrement} className='border p-2 bg-red-800 text-white rounded-lg'>increment</button>
        <button onClick={handleDecrement} className='border p-2 bg-red-800 text-white'>decrement</button>
        <button onClick={handleReset} className='border p-2 bg-red-800 text-white'>reset</button>
        </div>
    </div>
  )
}

export default CounterExample