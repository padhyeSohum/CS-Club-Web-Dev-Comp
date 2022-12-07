import React, { useState, useEffect } from 'react';
import './TodoItem.css'

const TodoItem = () => {
    return (
        <div className="todo-wrapper">
            <div className="top-row todo-horizontal">
                <div className="task-name task-section">name</div>
                <div className="task-description task-section">description</div>
            </div>
            <div className="bottom-row todo-horizontal">
                <div className="task-info task-section">info</div>
                <div className="task-actions task-section">
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