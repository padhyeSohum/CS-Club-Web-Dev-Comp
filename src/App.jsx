import React, { useState, useEffect } from 'react';
import './App.css';
import TodoItem from './TodoItem';
import SubmitTodo from './SubmitTodo';

function App() {

    const [taskList, setTaskList] = useState([])
    console.log(taskList)

    const createTaskItem = (name, timeToComplete, creationDate, creationTime, colourBanner) => {
        setTaskList([...taskList, <TodoItem name={name} timeToComplete={timeToComplete} creationDate={creationDate} creationTime={creationTime} colourBanner={colourBanner} />])
    }

    return (
        <div className="center-this">
            <div className="task-items">
                {taskList.map((item) => {return(<div>{item}</div>)})}
            </div>
            
            <SubmitTodo createTaskItem={createTaskItem}/>
        </div>
    );
}

export default App;