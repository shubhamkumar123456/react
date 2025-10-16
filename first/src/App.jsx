

import Counter from './Counter'
import X from  './Navbar'  // component function
import './App.css'
import ConditionalRendering from './ConditionalRendering'
import ExpenseTracker from './ExpenseTracker'
function App() {

  let obj = {
    color : "white",
    backgroundColor:"black",
    padding:"10px"
  }


  return (
    <div className=''>
      {/* <h1>This is App</h1>
      <h6 style={{color:'white',backgroundColor:"green"}}>this is heading tag</h6>
      <X/>

      <div style={obj}>
          <h1>This is Box</h1>
          <ul>
            <li>one</li>
            <li>Two</li>
            <li>Three</li>
          </ul>
      </div> */}
      
        {/* <ConditionalRendering/> */}

        <ExpenseTracker/>
       
      {/* <Counter/> */}
    
    </div>
  )
}

export default App
