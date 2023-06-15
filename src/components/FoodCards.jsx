import React, {useState} from 'react'
import {data} from '../data/data.js'

function FoodCards() {

    const [foods, setFoods] = useState(data)


    const filterType = (category) =>{
        setFoods(data.filter((item=>{
            return item.category === category
        })))
    }

    const filterPrice = (price) =>{
        setFoods(data.filter((item=>{
            return item.price === price
        })))
    }

  return (

    <div className='max-w-[1640px] py-12 px-4'>
        <h1 className='text-orange-400 text-4xl text-center font-bold'>Top rated manu items</h1>
        {/* filter area */}
        <div className='flex flex-col lg:flex-row justify-between'>
        {/* filter type */}

            <div>
                <p className='font-bold text-gray-700 mb-2'>Filter by type</p>
                <div className='flex flex-wrap justify-between'>
                    <button onClick={()=>setFoods(data)} className='m-1 text-orange-600 border-orange-600 hover:bg-orange-600 duration-300 hover:text-white'>All</button>
                    <button onClick={()=> filterType('burger')} className='m-1 text-orange-600 border-orange-600 hover:bg-orange-600 duration-300 hover:text-white'>Burgers</button>
                    <button onClick={()=> filterType('pizza')} className='m-1 text-orange-600 border-orange-600 hover:bg-orange-600 duration-300 hover:text-white'>Pizzas</button>
                    <button onClick={()=> filterType('salad')} className='m-1 text-orange-600 border-orange-600 hover:bg-orange-600 duration-300 hover:text-white'>Salads</button>
                    <button onClick={()=> filterType('chicken')} className='m-1 text-orange-600 border-orange-600 hover:bg-orange-600 duration-300 hover:text-white'>Chicken</button>
                </div>
            </div>


        {/* filter price */}

            <div>
                <p className='font-bold text-gray-700 mb-2'>Filter by price</p>    
                <div className='flex flex-wrap justify-between'>
                    <button onClick={()=>filterPrice('$')} className='m-1 text-orange-600 border-orange-600 hover:bg-orange-600 duration-300 hover:text-white'>$</button>
                    <button onClick={()=>filterPrice('$$')} className='m-1 text-orange-600 border-orange-600 hover:bg-orange-600 duration-300 hover:text-white'>$$</button>
                    <button onClick={()=>filterPrice('$$$')} className='m-1 text-orange-600 border-orange-600 hover:bg-orange-600 duration-300 hover:text-white'>$$$</button>
                    <button onClick={()=>filterPrice('$$$$')} className='m-1 text-orange-600 border-orange-600 hover:bg-orange-600 duration-300 hover:text-white'>$$$$</button>
                </div>
            </div>
        </div>


        {/* food cards */}

        <div className='grid grid-cols-2 lg:grid-cols-4 gap-6 pt-4'>
            {foods.map((item,index)=>(

                <div key={index} className='rounded-b-lg border shadow-lg hover:scale-105 duration-300'>
                    <img className='w-full h-[200px] object-cover rounded-t-lg' src={item.image} alt={item.name} />
                    <div className='flex justify-between px-2 py-4'>
                        <p className='font-bold'>{item.name}</p>
                        <p><span className='p-1 text-white bg-orange-600 rounded-full'>{item.price}</span></p>
                    </div>
                </div>

            ))}
        </div> 
    </div>
  )
}

export default FoodCards