import React from 'react'
import ryttext from './ryttext'
import lefttext from './lefttext'

const page1contant = (props) => {
  return (
    <div className='py-10 flex items-center  gap-10  h-[90vh] px-18'>
        
        {lefttext()}
        {ryttext(users=props.users)}
    </div>
  )
}

export default page1contant