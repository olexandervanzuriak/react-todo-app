import { useContext, useState } from 'react';
import { TaskContext } from '../../context/task-context';
import { Input } from 'antd';

export const TaskForm = (props) => {
    const [enteredTask, setEnteredTask] = useState();

    const {addTask} = useContext(TaskContext);

    const submit = () => {
        addTask(enteredTask);
        setEnteredTask("");
        props.show();
    }

    const TaskChanger = (event) => {
        setEnteredTask(event.target.value);
    }

    return (
        <div>
            <Input placeholder="Enter task" value={enteredTask} onChange={TaskChanger} />
            <button onClick={submit} className="submit_button">Submit</button>
        </div>
    )
}