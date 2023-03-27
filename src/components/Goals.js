import {Link} from "react-router-dom"

const Goals=({goal})=>{
    return(
        <div>
            <Link to={`/goals/${goal.id}`}>
                <h1>{goal.goal}</h1>
                <h2>{goal.dueDate}</h2>
                <h2>{goal.completed}</h2>
            </Link>
        </div>
    )
}

export default Goals