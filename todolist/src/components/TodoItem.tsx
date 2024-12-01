import React from "react";

type TodoItemProps = {
  todo: { id: number; name: string; isCompleted: boolean };
  onToggle: (id: number) => void;
};

const TodoItem = ({ todo, onToggle }: TodoItemProps) => {
  return (
    <div
      className={`flex items-center justify-between p-4 rounded-full shadow-md border-black ${
        todo.isCompleted ? "bg-violet-100 line-through" : "bg-white"
      } border border-slate-100`}
    >
      <div className="flex items-center gap-4">
        <div
          onClick={(e) => {
            e.stopPropagation();
            onToggle(todo.id);
          }}
          className={`w-6 h-6 flex items-center justify-center rounded-full cursor-pointer border-black ${
            todo.isCompleted
              ? "bg-purple-500"
              : "bg-yellow-100 border border-slate-300"
          }`}
        >
          {todo.isCompleted && (
            <svg
              className="w-4 h-4 text-white"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M5 13l4 4L19 7"
              />
            </svg>
          )}
        </div>
        <span className="text-black">{todo.name}</span>
      </div>
    </div>
  );
};

export default TodoItem;
