import React, { useState } from 'react';
import TaskList from './Components copy/Tasklist';
import './App.css';


interface Task {
  task: string;
  completed: boolean;
}

const App: React.FC = () => {
  const [tasks, setTasks] = useState<Task[]>([]);
  const [newTask, setNewTask] = useState<string>('');

  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setNewTask(event.target.value);
  };

  const handleFormSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    if (newTask.trim() !== '') {
      setTasks([...tasks, { task: newTask, completed: false }]);
      setNewTask('');
    }
  };

  const handleDeleteTask = (index: number) => {
    const updatedTasks = [...tasks];
    updatedTasks.splice(index, 1);
    setTasks(updatedTasks);
  };

  const handleToggleTask = (index: number) => {
    const updatedTasks = [...tasks];
    updatedTasks[index] = { ...updatedTasks[index], completed: !updatedTasks[index].completed };
    setTasks(updatedTasks);
  };

  return (
    <div className="container">
    <h1>To-Do List</h1>
    
    <div className="form-container">
      <form onSubmit={handleFormSubmit}>
        <input
          type="text"
          placeholder="Enter a new task"
          value={newTask}
          onChange={handleInputChange}
        />
        <button type="submit">Add Task</button>
      </form>
    </div>
  
    <TaskList tasks={tasks} onDelete={handleDeleteTask} onToggle={handleToggleTask} />
  </div>
  );
};

export default App;
