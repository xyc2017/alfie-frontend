import Goals from "../components/Expenses"
import { useLoaderData } from "react-router-dom"
import {Form} from "react-router-dom"

const NewGoal=()=>{
    return (
        <div>
            <Form action="/create" method="post">
                <input type="text" name="Goal" placeholder="Enter goal here" />
                <input type="date" name="Due Date"/>
                <input type="checkbox" name="Completed?" />
            </Form>
        </div>
    )
}

const GoalsP=(props)=>{
    const goals=useLoaderData()
    return <>
            <div>
                {goals.map((goal)=><Goals key={goal.id} goal={goal} />)}
            </div>
        </>
}
export {GoalsP, NewGoal}