'use client'
import React ,{useState} from 'react'



const CounteExample = () => {
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
    <div className='flex flex-col items-center '>
        <h1>count handling</h1>
        <h4>number is count : {count} </h4>
        <div>
            <button onClick={handleIncrement} className='m-4 p-2 border rounded-full  bg-red-500  '>increment</button>
            <button  onClick={handleDecrement} className='m-4 p-2 border rounded-full  bg-red-500  '>decrement</button>
            <button  onClick={handleReset} className='m-4 p-2 border rounded-full  bg-red-500  '>reset</button>
        </div>
    </div>
  )
}

export default CounteExample