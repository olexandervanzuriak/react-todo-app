import { useContext, useState } from "react";
import { TaskContext } from "../../context/task-context";
import { TaskForm } from "./TaskForm";
import CheckToDo from "../../components/CheckTodo";
import { Layout, Card, Button } from "antd";
import "./Home.css";

const { Header } = Layout;

export const Home = () => {
  const { taskItems, removeTask } = useContext(TaskContext);
  const [ showInput, setShowInput ] = useState(false);

  const currentDate = new Date();
  const daysOfWeek = [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
  ];
  const monthsOfYear = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December",
  ];
  const dayOfWeek = daysOfWeek[currentDate.getDay()];
  const month = monthsOfYear[currentDate.getMonth()];
  const day = currentDate.getDate();
  const year = currentDate.getFullYear();

  const doneTask = (event) => {
    removeTask(event.target.id);
    console.log("Hello");
  };

  const showInputChanger = () => {
    console.log("dfdsfdfsd");
    setShowInput(!showInput);
  };

  return (
    <div className="home">
      <Header style={{ display: "flex", alignItems: "center" }}></Header>
      <div className="tasks_box">
        <Card
          title={dayOfWeek}
          bordered={false}
          style={{
            width: 300,
          }}
        >
          <p>{month + " " + day + " " + year}</p>
          <div className="tasks">
            {taskItems.map((task) => (
              <div key={task.id}>
                <CheckToDo id={task.id} text={task.text} onChange={doneTask} />
                <br />{" "}
              </div>
            ))}
          </div>
          {!showInput &&
          <Button type="primary" onClick={showInputChanger}>
            Add task
          </Button> }
          {showInput && <TaskForm show={showInputChanger} />}
        </Card>
      </div>
    </div>
  );
};
 