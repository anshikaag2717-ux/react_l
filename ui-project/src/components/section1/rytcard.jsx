import React from 'react'

const rytcard = () => {
  return (
    <div className='h-full overflow-hidden relative bg-amber-300 w-80 rounded-4xl'>
       <img className='h-full w-full object-cover' src='https://plus.unsplash.com/premium_photo-1661630621969-6d9faac03f9f?q=80&w=987&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'>
       </img>
       <div className='absolute top-0 left-0 h-full w-full mb-15 text-white p-8 flex flex-col justify-between'>
        <h2 className='bg-white rounded-full h-12 w-12 flex justify-center items-center font-semibold'>1</h2>
        <div>
            <p  className='text-xl leading-relaxed '>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Molestias, quibusdam.</p>
            <div>
                <button className='bg-blue-600 rounded-full text-white font-medium text-lg px-7 py-3'>Satisfied</button>
                <button className='bg-blue-600 rounded-full text-white font-medium px-4 text-lg py-3'>...</button>
            </div>
        </div>
       </div>
    </div>
  )
}

export default rytcard