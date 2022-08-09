import React from 'react'
// import {useState} from 'react'
// import logo from './logo.svg';
import './App.css';
import {Expenses, Expense} from './classes.js'

const expenses =[
  {
    expenseName: "rent",
    expenseAmt: 930,
  },
  {
    expenseName: "insurance",
    expenseAmt: 250,
  },

  //   set expenseName(expenseName){
  //     this.expenseName = expenseName;
  //   },

  //   set expenseAmt(expenseAmt){
  //     this.expenseAmt = expenseAmt;
  //   },
  // }

]

expenses.expenseName = "rent"
expenses.expenseAmt = 730


console.log(expenses.expenseName, expenses.expenseAmt)

function App(props) {
  return (
    <div>
      <Expense monthly_expenses={expenses}/>
    </div>
      // {props.expenses.map(expense =>
      //   <p>{monthly_expenses.expenseName}</p>)}
  );
}


export default App;


