import React from 'react';
import Task from './Task';

interface TaskListProps {
  tasks: { task: string; completed: boolean }[];
  onDelete: (index: number) => void;
  onToggle: (index: number) => void;
}

const TaskList: React.FC<TaskListProps> = ({ tasks, onDelete, onToggle }) => {
  return (
    <div>
      {tasks.map((task, index) => (
        <Task
          key={index}
          task={task.task}
          completed={task.completed}
          onDelete={() => onDelete(index)}
          onToggle={() => onToggle(index)}
        />
      ))}
    </div>
  );
};



export default TaskList;
