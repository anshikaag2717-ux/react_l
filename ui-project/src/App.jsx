import React from 'react'
import section1 from './components/section1/section1'
import section2 from './components/section2/section2'

const App = () => {

  const users=[
    { 
      img:'https://plus.unsplash.com/premium_photo-1661630621969-6d9faac03f9f?q=80&w=987&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
      intro:'',
      tag: 'Satisfied'},
    {
      img:'https://plus.unsplash.com/premium_photo-1661694525800-3a8c85e1c283?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1yZWxhdGVkfDMzfHx8ZW58MHx8fHx8',
      intro:'',
      tag: 'Underserved'
    },
    {
      img:'https://plus.unsplash.com/premium_photo-1661658537773-a38f4df454dc?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1yZWxhdGVkfDV8fHxlbnwwfHx8fHw%3D',
      intro:'',
      tag: 'Underbanked'
    }
    ]
  return (
    <div >
      {section1(users={users})}
      {section2()}
    </div>
  )
}

export default App