"use client";
import React, { useState, useRef } from "react";

type AddTodoFormProps = {
  onAdd: (newTodo: { name: string; isCompleted: boolean }) => void;
};

const AddTodoForm = ({ onAdd }: AddTodoFormProps) => {
  const [name, setName] = useState("");
  const inputRef = useRef<HTMLInputElement>(null);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!name.trim()) return;
    onAdd({ name, isCompleted: false });
    setName("");
    if (inputRef.current) {
      inputRef.current.focus();
    }
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="flex items-center gap-4 justify-center mb-8"
    >
      <input
        ref={inputRef}
        type="text"
        placeholder="할 일을 입력해주세요"
        value={name}
        onChange={(e) => setName(e.target.value)}
        className="w-[1016px] h-[56px] border bg-slate-100 rounded-[28px] px-6 text-base focus:outline-none focus:ring-2 focus:ring-violet-600 shadow-md shadow-black"
      />
      <button
        type="submit"
        className="w-[168px] h-[56px] bg-slate-300 text-black text-lg rounded-full transition shadow-md shadow-black flex items-center justify-center gap-x-2"
      >
        <img
          src="/codeit/Property 1=Variant2@2x.png"
          alt="plus icon"
          className="w-4 h-4"
        />
        추가하기
      </button>
    </form>
  );
};

export default AddTodoForm;
