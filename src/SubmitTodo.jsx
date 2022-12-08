import React, { useState, useEffect } from 'react';

const SubmitTodo = (props) => {

    const [taskName, setTaskName] = useState('');
    const [timeGiven, setTimeGiven] = useState([0, 0]);
    const [colourBanner, setColourBanner] = useState('default');

    const date = new Date();

    const getDate = () => {
        return String(date.getFullYear()) + "-" + String(date.getMonth()+1) + "-" + String(date.getDate())
    }

    const getTime = () => {
        return String(date.getTime())
    }

    const handleNameChange = (event) => {
        setTaskName(event.target.value);
    }

    const handleTimeChange = (event) => {
        if (event.target.placeholder == 'Hours') {
            setTimeGiven([event.target.value, timeGiven[1]])
        }

        else {
            setTimeGiven([timeGiven[0], event.target.value])
        }

    }

    
    
    const handleClick = () => {
        props.createTaskItem(taskName, timeGiven[0]*60*60*1000 + timeGiven[1]*60*1000, getDate(), getTime(), colourBanner)
    }



    return (
        <div className="submit-todo-wrapper">
            <div className="submit-inputs">
                <input className="submit-inputs-name" placeholder="Task Name" onChange={handleNameChange} required/>
                <div className="submit-inputs-time-given">
                    <input className="submit-inputs-time-hours" placeholder="Hours" type="number" onChange={handleTimeChange}/>
                    <input className="submit-inputs-time-minutes" placeholder="Minutes" type="number" onChange={handleTimeChange}/>
                </div>
            </div>
            <button className="submit-btn" onClick={handleClick}>Create Task</button>
        </div>
    )
}

export default SubmitTodo;