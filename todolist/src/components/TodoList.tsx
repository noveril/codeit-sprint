"use client";
import React from "react";
import { useRouter } from "next/navigation";
import { useTodo } from "../contexts/TodoContext";
import TodoItem from "./TodoItem";
import AddTodoForm from "./AddTodoForm";

const TodoList = () => {
  const router = useRouter();
  const { todos, toggleTodo, addTodo } = useTodo();

  const ongoingTodos = todos.filter((todo) => !todo.isCompleted);
  const completedTodos = todos.filter((todo) => todo.isCompleted);

  return (
    <div className="max-w-[1200px] mx-auto py-10 px-4">
      <div className="flex items-center justify-between mb-8">
        <AddTodoForm onAdd={addTodo} />
      </div>
      <div className="grid grid-cols-2 gap-10">
        {/* TO DO */}
        <div>
          <h2 className="text-green-700 bg-lime-300 text-[18px] font-bold rounded-[23px] w-[120px] h-[36px] flex items-center justify-center mb-6">
            TO DO
          </h2>
          <div className="space-y-4">
            {ongoingTodos.map((todo) => (
              <div
                key={todo.id}
                onClick={() => router.push(`/items/${todo.id}`)}
              >
                <TodoItem todo={todo} onToggle={toggleTodo} />
              </div>
            ))}
          </div>
        </div>
        {/* DONE */}
        <div>
          <h2 className="text-yellow-400 bg-green-700 text-[18px] font-bold rounded-[23px] w-[120px] h-[36px] flex items-center justify-center mb-6">
            DONE
          </h2>
          <div className="space-y-4">
            {completedTodos.map((todo) => (
              <div
                key={todo.id}
                onClick={() => router.push(`/items/${todo.id}`)}
              >
                <TodoItem todo={todo} onToggle={toggleTodo} />
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default TodoList;
