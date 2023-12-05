import { createContext, useState } from "react";

export const TaskContext = createContext(null);

export const TaskContextProvider = (props) => {
    const [taskItems, setTaskItems] = useState([{id: 1, text: "task1"}, {id: 2, text: "task2"}]);

    const addTask = (task) => {
        setTaskItems((prev) => ([...prev, {id: taskItems[taskItems.length - 1].id + 1, text: task}]))
    }

    const removeTask = (id) => {
        setTaskItems((prev) => prev.filter((prev) => prev.id !== id));
        console.log(id);
    }

    const contextValue = {taskItems, addTask, removeTask};

    return <TaskContext.Provider value={contextValue}>
        {props.children}
    </TaskContext.Provider>
}