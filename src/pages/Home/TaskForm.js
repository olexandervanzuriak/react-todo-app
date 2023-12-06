import { useContext, useState } from "react";
import { TaskContext } from "../../context/task-context";
import { Button, Input } from "antd";

export const TaskForm = (props) => {
  const [enteredTask, setEnteredTask] = useState();

  const { addTask } = useContext(TaskContext);

  const submit = () => {
    if (enteredTask) {
      addTask(enteredTask);
      setEnteredTask("");
      props.show();
    } else {
      props.show();
    }
  };

  const TaskChanger = (event) => {
    setEnteredTask(event.target.value);
  };

  return (
    <div className="task-form">
        <form onSubmit={submit}>
        <Input
        placeholder="Enter task"
        value={enteredTask}
        onChange={TaskChanger}
      />
      <Button className="submit-button" type="primary" onClick={submit}>
        Submit
      </Button>
        </form>
    </div>
  );
};
