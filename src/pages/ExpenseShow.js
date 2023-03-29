import { useLoaderData, Form } from "react-router-dom";

const ExpenseShow=()=>{
    const expense=useLoaderData()
    return (
        <div>
            <h1>{expense.itemName}</h1>
            <h2>{expense.dateOcurred}</h2>
            <h2>{expense.price}</h2>
            <div>
                <h2>Update Expense</h2>
                <Form action={`/update/${expense.id}`} method="post">
                    <input type="text" name="Item Name" placeholder="Item Name" defaultValue={expense.itemName} />
                    <input type="date" name="Date Occurred" defaultValue={expense.dateOcurred} />
                    <input type="number" name="Price" defaultValue={expense.price} />
                    <button>Update Expense</button>
                </Form>
                <Form action={`/delete/${expense.id}`} method="post">
                    <button>Delete Expense</button>
                </Form>
            </div>
        </div>
    )
}

export default ExpenseShow