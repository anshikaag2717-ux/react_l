import React from 'react'

const App = () => {
  function btnclicked(){
    console.log("button is clicked ");
    
  }
  return (
    <div>
      <button onClick={btnclicked}>change user</button>
      <button onDoubleClick={btnclicked}>explore this </button>
      <button onClick={function(){
        console.log("hello");
      }}>function hello</button>
      <div>
        <input onClick={function(elem){
          console.log(elem.target.valuek);
          
        }}
        type="text"
        placeholder='enter name '/>
      </div>
      <div on onMouseMove={(elem)=>{
        console.log(elem.clientX)
      }}> on mouse move 

      </div>
    </div>
  )
}

export default App