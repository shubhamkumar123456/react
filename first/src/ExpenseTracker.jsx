import React, { useState } from 'react'

const ExpenseTracker = () => {

    const [arr, setArr] = useState([
        {id:1, expenseName:"salary", creditedAmount:18000, debitedAmount:0,date:"13-10-25"},
        {id:2, expenseName:"dinner", creditedAmount:0, debitedAmount:300,date:'13-10-25'},
        {id:3, expenseName:"zoo", creditedAmount:0, debitedAmount:450,date:'14-10-25'},
        {id:4, expenseName:"club", creditedAmount:0, debitedAmount:1500,date:'15-10-25'},
    ])

    


    // let arr = [
    //     {id:1, expenseName:"salary", creditedAmount:18000, debitedAmount:0,date:"13-10-25"},
    //     {id:2, expenseName:"dinner", creditedAmount:0, debitedAmount:300,date:'13-10-25'},
    //     {id:3, expenseName:"zoo", creditedAmount:0, debitedAmount:450,date:'14-10-25'},
    //     {id:4, expenseName:"club", creditedAmount:0, debitedAmount:1500,date:'15-10-25'},
    // ]

    function handleDelete(value,index){
        console.log("running")
        console.log(value)
        console.log(index)
        
        let copyArr = [...arr]
        copyArr.splice(index,1);
        console.log(copyArr)
        setArr(copyArr)
       
    }

  return (
    <div>
        <h1 style={{textAlign:"center"}}>This is Expense Tracker App</h1>
       {/* <div>
         <p>{arr[0].expenseName}</p>
        <p>{arr[0].creditedAmount}</p>
        <p>{arr[0].debitedAmount}</p>
        <p>{arr[0].date}</p>
       </div> */}

       {/* <div>
         <p>{arr[1].expenseName}</p>
        <p>{arr[1].creditedAmount}</p>
        <p>{arr[1].debitedAmount}</p>
        <p>{arr[1].date}</p>
       </div> */}

       {/* {
        arr.map((obj, index)=>{
            return <div>
                <p>{obj.expenseName}</p>
                <p>{obj.debitedAmount}</p>
                <p>{obj.date}</p>
                
            </div>
        })
       } */}

       <table border={1} className='tableExpense' >
            <thead>
                <tr>
                    <th style={{padding:"15px"}}>Sno</th>
                    <th>Expense Name</th>
                    <th>Credited Amount</th>
                    <th>Debited Amount</th>
                    <th></th>
                </tr>
            </thead>
            <tbody>
                {
                    arr.map((obj, i)=>{  
                     return <tr key={obj.id}>
                            <td>{i+1}</td>
                            <td>{obj.expenseName}</td>
                            <td>{obj.creditedAmount}</td>
                            <td>{obj.debitedAmount}</td>
                            <td>
                                <button onClick={()=> handleDelete(obj,i)}>Delete</button>
                                <button>Update</button>
                            </td>
                        </tr>
                    })
                }
            </tbody>
       </table>


    </div>
  )
}

export default ExpenseTracker
