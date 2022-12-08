import React, { useState, useEffect } from 'react';

const SubmitTodo = () => {
    return (
        <div className="submit-todo-wrapper">
            <div className="submit-inputs">
                <input className="submit-inputs-name" placeholder="Task Name" />
                <input className="submit-inputs-time-given" placeholder="Time to Complete" />
            </div>
            <button className="submit-btn"></button>
        </div>
    )
}

export default SubmitTodo;