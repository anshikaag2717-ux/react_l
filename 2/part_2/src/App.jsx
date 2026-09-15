
const App = () => {
  const arr=[10,20,30,40]
  return (
    
    <div className='card'>
        {arr.map(function(elem){
          return elem*2
        })}
      <h2> amazon </h2>
      <span>5 days ago</span>
      <h4>senior lvl</h4>
      <p>Lorem ipsum dolor sit.</p>
    </div>
    
  )
}

export default App