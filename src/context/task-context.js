import { createContext, useState } from "react";

export const TaskContext = createContext(null);

export const TaskContextProvider = (props) => {
    const [taskItems, setTaskItems] = useState([{id: 1, text: "task1"}, {id: 2, text: "task2"}]);

    const addTask = (task) => {
        setTaskItems((prev) => ([...prev, {id: prev.id + 1, text: task}]))
    }

    const contextValue = {taskItems, addTask};

    return <TaskContext.Provider value={contextValue}>
        {props.children}
    </TaskContext.Provider>
}