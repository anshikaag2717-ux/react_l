import React from 'react'
import navbar from './navbar'
import page1contant from './page1contant'

const section1 = (props) => {
  return (
    <div className='h-screen w-full'>
    {navbar()}
    {page1contant(users=props.users)}
    </div>
  )
}

export default section1