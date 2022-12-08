import React, { useState, useEffect } from 'react';
import './TodoItem.css'

const TodoItem = (props) => {
    return (
        <div className="task-wrapper">
            <div className="task-border">
                <div className="task-section task-time-left"><span className="task-time-left-text">{props.timeLeft}</span> left</div>

                <div className="task-section task-name"><b>{props.name}</b></div>

                <div className="task-section task-description">
                    <div className="task-creation-date">Created on {props.creationDate}</div>
                    <div className="task-original-time-given">{props.originalTimeGiven} given</div>
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