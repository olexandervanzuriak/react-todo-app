import { useContext } from "react"
import { TaskContext } from "../../context/task-context"
import { TaskForm } from "./TaskForm";
import CheckToDo from "../../components/CheckTodo";
import { Layout} from 'antd';
import "./Home.css";

const { Header } = Layout;

export const Home = () => {
    const {taskItems} = useContext(TaskContext);

    return <div className="home">
        <Header style={{ display: 'flex', alignItems: 'center' }}></Header>
        <TaskForm />
        <div className="tasks">
            {taskItems.map((task) => <div><CheckToDo text={task.text} /><br/> </div>)}
        </div>
    </div>
}