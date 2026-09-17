import React from 'react'

const App = () => {
   const user = {
    username : 'anshika',
    age: 19,
    city:'Aligarh'
  }
  
  localStorage.setItem('user',JSON.stringify(user))
 const mew = localStorage.getItem('user')
 console.log(mew);
   //setItem
   //getItem
   //remove
   //clear
   //stringify(to convert obj into str) -> use Json.parse to get 
  return (
    <div>App</div>
  )
}

export default App