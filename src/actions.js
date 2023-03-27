import {redirect} from "react-router-dom"

// deployed API base URL
const URL="https://alfie-backend.onrender.com"


// expense actions
export const createExpense=async({request})=>{
    const formData=await request.formData() // get form data
    const newExpense={
        dateOcurred: formData.get("dateOcurred"),
        itemName: formData.get("itemName"),
        price: formData.get("price"),
    } 
    await fetch(URL+"/expenses/", {
        method: "post",
        headers:{
            "Content-Type": "application/json"
        },
        body: JSON.stringify(newExpense)
    })
    return redirect("/expenses/")
}

export const updateExpense=async({request, params})=>{
    const formData=await request.formData()
    const updateExpense={
        dateOcurred: formData.get("dateOcurred"),
        itemName: formData.get("itemName"),
        price: formData.get("price"),
    }
    await fetch(URL+"/expenses"+params.id+"/", {
        method:"put",
        headers:{
            "Content-Type": "application/json"
        },
        body: JSON.stringify(updateExpense)
    })
    return redirect("/expenses/")
}

export const deleteExpense=async({params})=>{
    const id=params.id
    await fetch(URL+`/expenses/${id}`,{
        method:"delete",
    })
    return redirect("/expenses/")
}

// goal actions

export const createGoal=async({request})=>{
    const formData=await request.formData() //get formData
    const newGoal={
        goal: formData.get("goal"),
        dueDate: formData.get("dueDate"),
        completed: formData.get("completed"),
    }
    await fetch(URL+"/goals/", {
        method: "post",
        headers:{
            "Content-Type":"application/json"
        },
        body: JSON.stringify(newGoal)
    })
    return redirect("/goals/")
}

export const updateGoal=async({request, params})=>{
    const formData=await request.formData() //get formData
    const updateGoal={
        goal: formData.get("goal"),
        dueDate: formData.get("dueDate"),
        completed: formData.get("completed"),
    }
    await fetch(URL+"/goals/"+params.id+"/", {
        method: "put",
        headers:{
            "Content-Type": "application/json"
        },
        body:JSON.stringify(updateGoal)
    })
    return redirect("/goals/")
}

export const deleteGoal=async({params})=>{
    const id=params.id
    await fetch(URL+`/goals/${id}/`,{
        method: "delete",
    })
    return redirect("/goals/")
}