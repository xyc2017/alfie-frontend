import Expenses from "../components/Expenses"
import Goals from "../components/Goals"
import { useLoaderData } from "react-router-dom";

const Index=(props)=>{
    const expenses=useLoaderData()
    console.log(expenses, "here are the expenses")
    const goals=useLoaderData()
    console.log(goals, "here are the goals")
    return <>
        <div>
            {expenses.map((expense)=><Expenses key={expense.id} expense={expense}/>)}
        </div>
        <div>
            {goals.map((goal)=><Goals key={goal.id} goal={goal}/>)}
        </div>
    </>
}

export default Index