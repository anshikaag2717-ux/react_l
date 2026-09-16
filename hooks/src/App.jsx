import React , { useState }from 'react'

const App = () => {
   const [num, setNum] = useState(0)
   function increaseNum(){
    setNum(num+1)

   }
    function decreaseNum(){
    setNum(num-1)
   }
  return (
    <div>
       <h1 id='star'>{num}</h1>
        <button id='style' onClick={increaseNum}>increase</button>
        <button id='style'onClick={decreaseNum}>decrease</button>
    </div>
  )
}

export default App