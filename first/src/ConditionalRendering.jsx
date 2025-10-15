import React, { useState } from 'react'

const ConditionalRendering = () => {

    // let x = 10

    // if(x==10){
    //     console.log("yes")
    // }
    // else{
    //     console.log("no")
    // }

    // ternary operator   ?

    // x==10 ? console.log("yes") : console.log("no")


    // 
    // let x = false
    const [x, setx] = useState(false);
    console.log(x) //false// true


    function handleSwap(){

        if(x==true){
            setx(false)
            
        }
        else{
            setx(true)
            
        }
    }
  return (
    <div>
      <h1>This is conditional component</h1>

{/* true */}
      {x ? <p>THis is  one</p> :   <p>This is Two</p>}



       { x ?<form action="" style={{border:"1px solid"}}>
            <label htmlFor="">Name</label><br />
            <input type="text" /> <br />
            <label htmlFor="">Name</label> <br />
            <input type="text" /> <br />
        </form> : ''}
     

      {/* <button onClick={handleSwap}>Swap Text</button> */}
      <button onClick={handleSwap}>Swap Form</button>
    </div>
  )
}

export default ConditionalRendering
