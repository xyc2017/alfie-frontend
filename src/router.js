import { createBrowserRouter, createRoutesFromElements, Route} from "react-router-dom"
import App from "./App"
import Index from "./pages/Index"
import Goal from "./pages/Goal"
import Expense from "./pages/Expense"
import NewExpense from "./pages/NewExpense"
import NewGoal from "./pages/NewGoal"
import {IndexLoader, ExpensesLoader, ExpenseLoader, GoalsLoader, GoalLoader} from "./loaders"
import {createExpense, updateExpense, deleteExpense, createGoal, updateGoal, deleteGoal} from "./actions"

const router=createBrowserRouter(createRoutesFromElements(
    <>
        <Route path="/" element={<App/>}>
            <Route path="" element={<Index/>} loader={IndexLoader} />
    
            <Route path="expense/:id" element={<Expense/>} loader={ExpenseLoader} />
            <Route path="expenses/new" element={<NewExpense/>} />
            <Route path="expenses" element={<ExpensesLoader />} />
            <Route path="create" action={createExpense} />
            <Route path="update/:id" action={updateExpense} />
            <Route path="delete/:id" action={deleteExpense} />
            <Route path="goal/:id" element={<Goal />} loader={GoalLoader} />
            <Route path="goals/new" element={<NewGoal/>} />
            <Route path="goals" element={<GoalsLoader />} />
            <Route path="create" action={createGoal} />
            <Route path="update/:id" action={updateGoal} />
            <Route path="delete/:id" action={deleteGoal} />

        </Route>
    </>
))

export default router