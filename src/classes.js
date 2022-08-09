import React from "react";

class Expense extends React.Component{
    render(){
        return(
            <div>
                <div className="App">
                    <label for="Expense">{this.props.monthly_expenses.expenseName}</label>
                    <input type="text"/>
                    {/* <div>{this.props.rent.ExpenseAmt}</div> */}
                </div>
            </div>
        )
    }
}

class Expenses {
    constructor(ExpenseName="", ExpenseAmt=0){
      this.ExpenseName = ExpenseName;
      this.ExpenseAmt = ExpenseAmt;
    }
    set newAmt(ExpenseAmt){
        this.ExpenseAmt = ExpenseAmt;
    }

    set ExpenseName(ExpenseName){
        this.ExpenseName = ExpenseName;
    }
  }
  

export{Expenses, Expense}
