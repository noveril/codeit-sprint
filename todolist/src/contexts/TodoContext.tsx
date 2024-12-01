"use client";
import React, { createContext, useContext, useState, ReactNode } from "react";

type Todo = {
  id: number;
  name: string;
  isCompleted: boolean;
  memo?: string;
  image?: string;
};

type TodoContextType = {
  todos: Todo[];
  toggleTodo: (id: number) => void;
  updateTodo: (id: number, updatedTodo: Partial<Todo>) => void;
  deleteTodo: (id: number) => void;
  addTodo: (newTodo: Omit<Todo, "id">) => void;
};

const TodoContext = createContext<TodoContextType | undefined>(undefined);

export const TodoProvider = ({ children }: { children: ReactNode }) => {
  const [todos, setTodos] = useState<Todo[]>([
    { id: 1, name: "비타민 챙겨 먹기", isCompleted: false },
    { id: 2, name: "운동하기", isCompleted: false },
    { id: 3, name: "운동 다녀오기", isCompleted: true },
    { id: 4, name: "비타민 챙겨가기", isCompleted: true },
  ]);

  const addTodo = (newTodo: Omit<Todo, "id">) => {
    setTodos((prevTodos) => [
      ...prevTodos,
      { id: prevTodos.length + 1, ...newTodo },
    ]);
  };

  const toggleTodo = (id: number) => {
    setTodos((prevTodos) =>
      prevTodos.map((todo) =>
        todo.id === id ? { ...todo, isCompleted: !todo.isCompleted } : todo
      )
    );
  };

  const updateTodo = (id: number, updatedTodo: Partial<Todo>) => {
    setTodos((prevTodos) =>
      prevTodos.map((todo) =>
        todo.id === id ? { ...todo, ...updatedTodo } : todo
      )
    );
  };

  const deleteTodo = (id: number) => {
    setTodos((prevTodos) => prevTodos.filter((todo) => todo.id !== id));
  };

  return (
    <TodoContext.Provider
      value={{ todos, toggleTodo, updateTodo, deleteTodo, addTodo }}
    >
      {children}
    </TodoContext.Provider>
  );
};

export const useTodo = () => {
  const context = useContext(TodoContext);
  if (context === undefined) {
    throw new Error("useTodo must be used within a TodoProvider");
  }
  return context;
};
