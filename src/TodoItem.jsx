import React, { useState, useEffect } from 'react';
import './TodoItem.css'

const TodoItem = (props) => {

    const date = new Date()
    let timeLeft;

    const calculateTimeLeft = () => {
        // (date.getTime()-props.creationTime)/1000/60/60-props.timeToComplete

        let timeLeftInMilliseconds = props.timeToComplete - (date.getTime()-props.creationTime)
        let timeLeftInSeconds = timeLeftInMilliseconds/1000
        let timeLeftInMinutes = timeLeftInSeconds/60
        let timeLeftInHours = timeLeftInMinutes/60

        let leftoverTimeInHours = Math.floor(timeLeftInHours)
        let leftoverTimeInMinutes = Math.round(timeLeftInMinutes) % 60

        let timeLeftCalculation = [leftoverTimeInHours, leftoverTimeInMinutes]
        // timeLeft = Math.round(timeLeft/1000)

        return timeLeftCalculation
    }

    timeLeft = calculateTimeLeft()

    return (
        <div className="task-wrapper">
            <div className="task-border">
                <div className="task-section task-time-left"><span className="task-time-left-text">{timeLeft[0]}h, {timeLeft[1]}min</span> left</div>

                <div className="task-section task-name"><b>{props.name}</b></div>

                <div className="task-section task-description">
                    <div className="task-creation-date">Created on {props.creationDate}</div>
                </div>

                <div className="task-section task-actions">
                    <button className="btn-actions btn-edit">
                        Edit
                    </button>
                    <button className="btn-actions btn-remove">
                        Remove
                    </button>
                </div>
            </div>

        </div>
    )
}

export default TodoItem;