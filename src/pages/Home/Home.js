import { useContext } from "react";
import { TaskContext } from "../../context/task-context";
import { TaskForm } from "./TaskForm";
import CheckToDo from "../../components/CheckTodo";
import { Layout } from "antd";
import "./Home.css";

const { Header } = Layout;

export const Home = () => {
  const { taskItems, removeTask } = useContext(TaskContext);

  const doneTask = (event) => {
    removeTask(event.target.id);
    console.log("Hello");
  };

  return (
    <div className="home">
      <Header style={{ display: "flex", alignItems: "center" }}></Header>
      <TaskForm />
      <div className="tasks">
        {taskItems.map((task) => (
          <div key={task.id}>
            <CheckToDo id={task.id} text={task.text} onChange={doneTask} />
            <br />{" "}
          </div>
        ))}
      </div>
    </div>
  );
};
