const URL="https://alfie-backend.onrender.com"

export const IndexLoader=async()=>{
    const response=await fetch(URL)
    const home=await response.json()
    return home
}
export const ExpensesLoader=async()=>{
    const response=await fetch(URL+"/expenses/")
    const expenses=await response.json()
    return expenses
}
export const ExpenseLoader=async({params})=>{
    const response=await fetch(URL+`/expenses/${params.id}`)
    const expense=await response.json()
    return expense
}

export const GoalsLoader=async()=>{
    const response=await fetch(URL+"/goals/")
    const goals=await response.json()
    return goals
}

export const GoalLoader=async({params})=>{
    const response=await fetch(URL+`/goals/${params.id}`)
    const goal=await response.json()
    return goal
}