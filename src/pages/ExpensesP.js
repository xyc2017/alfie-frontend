import Expenses from "../components/Expenses"
import { useLoaderData } from "react-router-dom"
import {Form} from "react-router-dom"

const NewExpense=()=>{
    return (
        <div>
            <Form action="/create" method="post">
                <input type="date" name="Date Occurred" placeholder="Date Occurred" />
                <input type="text" name="Item Name" placeholder="Item Name" />
                <input type="number" name="Price $" placeholder="Price" />  
                <div><button>Add New Expense</button></div>
            </Form>
        </div>
    )
}

const ExpensesP=(props)=>{
    const expenses=useLoaderData()
    return <>
            <div>
                {expenses.map((expense)=><Expenses key={expense.id} expense={expense} />)}
            </div>
        </>
}

export {ExpensesP, NewExpense}