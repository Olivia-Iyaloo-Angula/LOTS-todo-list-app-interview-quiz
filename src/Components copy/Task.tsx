import React from 'react';

interface TaskProps {
  task: string;
  completed: boolean; 
  onDelete: () => void;
  onToggle: () => void;
}

const Task: React.FC<TaskProps> = ({ task, completed, onDelete, onToggle }) => {
  
  const textDecoration = completed ? 'line-through' : 'none';

  return (
    <div>
      <input type="checkbox" checked={completed} onChange={onToggle} />
      <span style={{ textDecoration }}>{task}</span>
      <button onClick={onDelete}>Delete</button>
    </div>
  );
};

export default Task;
