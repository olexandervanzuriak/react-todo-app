import { useContext } from "react"
import { TaskContext } from "../../context/task-context"
import CheckToDo from "../../components/CheckTodo";

export const Home = () => {
    const {taskItems} = useContext(TaskContext);

    return <div>
        {taskItems.map((task) => <CheckToDo text={task.text} />)}
    </div>
}