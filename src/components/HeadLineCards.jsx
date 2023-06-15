import React from 'react'

function HeadLineCards() {
  return (
    <div className='max-w-[1640px] mx-auto px-4 py-12 grid gap-6 md:grid-cols-3'>
        <div className='rounded-xl relative'>
            {/* overlay */}
            <div className='absolute text-white bg-black/50 w-full h-full rounded-xl '>
                <p className='font-bold text-2xl px-2 pt-4'>Burgers</p>
                <p className='px-2'>last-of-us</p>
                <button className='mx-2 absolute bottom-4 border-white bg-white text-black font-bold'>Order now</button>
            </div>
            <img className='w-full rounded-xl mx-h-[160px] md:max-h-[200px] object-cover' src="https://images.unsplash.com/photo-1605345981660-ab44e036a21d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1088&q=80" alt="" />
        </div>

        <div className='rounded-xl relative'>
            {/* overlay */}
            <div className='absolute text-white bg-black/50 w-full h-full rounded-xl '>
                <p className='font-bold text-2xl px-2 pt-4'>Pizza mania</p>
                <p className='px-2'>out-standing</p>
                <button className='mx-2 absolute bottom-4 border-white bg-white text-black font-bold'>Order now</button>
            </div>
            <img className='w-full rounded-xl mx-h-[160px] md:max-h-[200px] object-cover' src="https://images.unsplash.com/photo-1574071318508-1cdbab80d002?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTh8fHBpenphfGVufDB8MHwwfHx8MA%3D%3D&auto=format&fit=crop&w=1000&q=60" alt="" />
        </div>

        <div className='rounded-xl relative'>
            {/* overlay */}
            <div className='absolute text-white bg-black/50 w-full h-full rounded-xl '>
                <p className='font-bold text-2xl px-2 pt-4'>Fried chicken</p>
                <p className='px-2'>la-aswan</p>
                <button className='mx-2 absolute bottom-4 border-white bg-white text-black font-bold'>Order now</button>
            </div>
            <img className='w-full rounded-xl mx-h-[160px] md:max-h-[200px] object-cover' src="https://images.unsplash.com/photo-1432139555190-58524dae6a55?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=876&q=80" alt="" />
        </div>
    </div>
  )
}

export default HeadLineCards