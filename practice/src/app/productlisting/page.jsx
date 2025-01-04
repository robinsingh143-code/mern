import React from 'react'
import Data from './dumiidata'  

const ProductListing = () => {
    const weatherCondition = (temp) => {
        if (temp<=28){
            return 'bg-blue-500 text-white'
        }else{
            return 'bg-red-500 text-white'
        }
    }


    const displayCards = ()=> {
        return Data.map((item) => (
            <div className='w-full md:w-1/3 mb-6'>
                <div className= {`rounded-lg shadow-lg p-4 ${weatherCondition(item.temperature)}`}> 
                    <img className='w-full h-48 object-cover rounded-lg' src={item.img} alt="" />
                
                <div>
                <h3 className='p-4'>{item.location}  </h3>
                <hr />
                <h5>temprature: {item.temperature}</h5>
                <h5>humidity: {item.humidity}</h5>
                </div>
            </div>
            </div>

        ))
    }


  return (
    

    <div className='p-10'>
        <h1 className='text-center text-3xl front-bold mb-8'>today's sky story</h1>
        <div className='flex flex-wrap mx-auto'>
            {displayCards()}

        </div>
    </div>
  )
}

export default ProductListing