import React from 'react'

const Rytcard = (props) => {
  return (
    <div className='h-full overflow-hidden relative bg-amber-300 w-80 rounded-4xl'>
       <img className='h-full w-full object-cover' src={props.img}>
       </img>
       <div className='absolute top-0 left-0 h-full w-full text-white p-8 flex flex-col'>
        <h2 className='bg-white rounded-full h-12 w-12 flex justify-center items-center font-semibold'>1</h2>
        <div>
            <p  className='text-xl leading-relaxed '>{props.intro}</p>
            <div>
                <button className='bg-blue-600 rounded-full text-white font-medium text-lg px-7 py-3'>{props.tag}</button>
                <button className='bg-blue-600 rounded-full text-white font-medium px-4 text-lg py-3'>...</button>
            </div>
        </div>
       </div>
    </div>
  )
}

export default Rytcard