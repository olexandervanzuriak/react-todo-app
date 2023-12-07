import { createContext, useState } from "react";

export const TaskContext = createContext(null);

export const TaskContextProvider = (props) => {
    const [taskItems, setTaskItems] = useState([{id: 1, text: "task1", complete: false}, {id: 2, text: "task2", complete: false}]);
    

    const addTask = (task) => {
        if (taskItems.length === 0) {
            console.log(taskItems.length);
            setTaskItems([{id: 1, text: task}]);
        } else {
            setTaskItems((prev) => ([...prev, {id: taskItems[taskItems.length - 1].id + 1, text: task}]))
        }
    }

    const removeTask = (id) => {
        taskItems[id-1].complete = true;
        setTaskItems((prev) => ([...prev]))
        console.log(id);
    }

    const contextValue = {taskItems, addTask, removeTask};

    return <TaskContext.Provider value={contextValue}>
        {props.children}
    </TaskContext.Provider>
}