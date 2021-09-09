import React, { useState } from "react";

import './ExpenseForm.css';

const ExpenseForm = () => {
    const [userInput, setUserInput] = useState({
        enteredTitle: '',
        enteredAmount: '',
        enteredDate: ''
    })

    const titleChangeHandler = (event) => {
        //setEnteredTitle(event.target.value);//busca en el arreglo el valor del texto
        setUserInput({
            ...userInput,
            enteredTitle: event.target.value,
        })
    };

    const amountChangeHandler = (event) => {
        //setEnteredAmount(event.target.value);
        setUserInput({
            ...userInput,
            enteredAmount: event.target.value,
        })
    }

    const dateChangeHandler = (event) => {
        //setEnteredDate(event.target.value);
        setUserInput({
            ...userInput,
            enteredDate: event.target.value,
        })
    }

    return <form>
        <div className="new-expense__controls">
            <div className="new-expense__control">
                <label>Title</label>
                <input type="text" onChange={titleChangeHandler}/> {/*Listener en el input */}
            </div>
        </div>
        <div className="new-expense__controls">
            <div className="new-expense__control">
                <label>Date</label>
                <input type='date' min="2019-01-01" max="2022-12-31" onChange={dateChangeHandler} />
            </div>
        </div>
        <div className="new-expense__controls">
            <div className="new-expense__control">
                <label>Amount</label>
                <input type='number' min="0.01" step="0.01" onChange={amountChangeHandler}/>
            </div>
        </div>
        <div className="new-expense__actions">
            <button type="submit">Add Expense</button>
        </div>
    </form>
};

export default ExpenseForm;