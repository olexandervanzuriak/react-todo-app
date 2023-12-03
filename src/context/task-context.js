import { createContext, useState } from "react";

export const TaskContext = createContext(null);

export const TaskContextProvider = (props) => {
    const [taskItems, setTaskItems] = useState([{key: 1, text: "task1"}]);

    const contextValue = {taskItems, setTaskItems};

    return <TaskContext.Provider value={contextValue}>
        {props.children}
    </TaskContext.Provider>
}