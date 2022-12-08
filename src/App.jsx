import React, { useState, useEffect } from 'react';
import './App.css';
import TodoItem from './TodoItem';
import SubmitTodo from './SubmitTodo';

function App() {
    return (
        <div className="center-this">
            <TodoItem timeLeft="3h 02m" name="Finish this project lmao" creationDate="2022-09-09" originalTimeGiven="15h"/>
            <TodoItem timeLeft="3h 02m" name="Finish this project lmao" creationDate="2022-09-09" originalTimeGiven="15h" />
            <SubmitTodo />
        </div>
    );
}

export default App;