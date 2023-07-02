import { TodoDays } from "./TodoDays"

function DaysContainer() {
    return(
       <div className="days-container">
            <TodoDays/>
            <TodoDays/>
            <TodoDays/>
            <TodoDays/>
       </div>

    )
    
}

export {DaysContainer}