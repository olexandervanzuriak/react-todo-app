import { useContext, useState } from "react";
import { TaskContext } from "../../context/task-context";
import { TaskForm } from "./TaskForm";
import CheckToDo from "../../components/CheckTodo";
import { Layout, Card, Button } from "antd";
import "./Home.css";

export const Home = () => {
  const { taskItems, removeTask } = useContext(TaskContext);
  const [showInput, setShowInput] = useState(false);

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
  };

  const showInputChanger = () => {
    setShowInput(!showInput);
  };

  return (
    <div className="home">
      <div className="navbar">
        <nav>
          <a>Today</a>
          <a>Tommorrow</a>
          <a>Calendar</a>
          
          <div class="animation start-home"></div>
        </nav>
      </div>
      <div className="tasks-box">
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
              <div className="task" key={task.id}>
                <CheckToDo id={task.id} text={task.text} onChange={doneTask} />
                <br />{" "}
              </div>
            ))}
          </div>
          {!showInput && (
            <Button
              className="add-button"
              type="primary"
              onClick={showInputChanger}
            >
              Add task
            </Button>
          )}
          {showInput && <TaskForm show={showInputChanger} />}
        </Card>
      </div>
      <div className="completed-tasks">
        <Card
          title={"Completed"}
          bordered={false}
          style={{
            width: 300,
          }}
        ></Card>
      </div>
    </div>
  );
};
