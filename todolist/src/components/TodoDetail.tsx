"use client";
import React, { useState, useEffect } from "react";
import { useRouter, useParams } from "next/navigation";
import { useTodo } from "../contexts/TodoContext";
import NavBar from "./NavBar";
import Image from "next/image";

type Todo = {
  id: number;
  name: string;
  isCompleted: boolean;
  memo?: string;
  image?: string;
};

const TodoDetail = () => {
  const router = useRouter();
  const { itemId } = useParams();
  const { todos, updateTodo, deleteTodo } = useTodo();
  const [editData, setEditData] = useState<Todo | null>(null);

  useEffect(() => {
    const todo = todos.find((t) => t.id === Number(itemId)) || null;
    setEditData(todo);
  }, [itemId, todos]);

  if (!editData) {
    return (
      <div className="flex justify-center items-center h-screen">
        Loading...
      </div>
    );
  }

  const handleToggleComplete = () => {
    setEditData((prevData) =>
      prevData ? { ...prevData, isCompleted: !prevData.isCompleted } : prevData
    );
  };

  const handleUpdate = () => {
    if (editData) {
      updateTodo(editData.id, editData);
      router.push("/");
    }
  };

  const handleDelete = () => {
    if (editData) {
      deleteTodo(editData.id);
      router.push("/");
    }
  };

  const handleImageUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setEditData((prevData) =>
          prevData ? { ...prevData, image: reader.result as string } : prevData
        );
      };
      reader.readAsDataURL(file);
    }
  };

  const handleInputChange = (
    e: React.ChangeEvent<HTMLTextAreaElement | HTMLInputElement>
  ) => {
    const { name, value } = e.target;
    setEditData((prevData) =>
      prevData ? { ...prevData, [name]: value } : prevData
    );
  };

  return (
    <div className="bg-slate-100 min-h-screen">
      <NavBar />
      <div className="relative max-w-[1200px] mx-auto p-10 flex flex-col items-center gap-6 min-h-screen rounded-lg bg-white">
        {/* 완료 상태 표시 */}
        <div
          className={`w-[1000px] h-[60px] flex items-center justify-center gap-4 mb-6 p-4 rounded-full cursor-pointer border-2 border-black ${
            editData.isCompleted ? "bg-violet-200" : "bg-white"
          }`}
          onClick={handleToggleComplete}
        >
          <div
            className={`w-7 h-7 flex items-center justify-center rounded-full border-2 ${
              editData.isCompleted
                ? "bg-purple-500 border-purple-500"
                : "bg-yellow-100 border-gray-300"
            }`}
          >
            {editData.isCompleted && (
              <svg
                className="w-6 h-6 text-white"
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
          <input
            type="text"
            name="name"
            value={editData.name}
            onChange={handleInputChange}
            className="text-xl font-bold bg-transparent border-none focus:outline-none"
          />
        </div>
        {/* 이미지 업로드 및 메모 */}
        <div className="flex gap-4 items-start justify-center">
          <div className="relative flex flex-col items-center w-[350px] h-[350px] border-2 border-dashed p-4 rounded-2xl border-slate-200 bg-slate-100">
            {editData.image ? (
              <Image
                src={editData.image}
                alt="Todo"
                fill
                className="object-cover rounded-lg"
              />
            ) : (
              <label
                htmlFor="file-upload"
                className="cursor-pointer mb-2 bg-slate-50 rounded-full absolute bottom-4 right-4"
              >
                <Image
                  src="/codeit/Property 1=Variant2.png"
                  alt="Upload Icon"
                  width={40}
                  height={40}
                />
              </label>
            )}
            <input
              id="file-upload"
              type="file"
              accept="image/*"
              onChange={handleImageUpload}
              className="hidden"
            />
          </div>
          <div
            className="w-[620px] h-[350px] p-4 rounded-lg"
            style={{
              backgroundImage: "url('/codeit/memo.png')",
              backgroundSize: "cover",
            }}
          >
            <h3 className="text-lg font-bold mb-2 text-amber-900 text-center">
              Memo
            </h3>
            <textarea
              name="memo"
              value={editData.memo || ""}
              onChange={handleInputChange}
              className="w-full p-2 text-lg focus:outline-none rounded-md h-full bg-transparent resize-none"
              placeholder="메모를 입력하세요"
            />
          </div>
        </div>
        {/* 수정 및 삭제 버튼 */}
        <div className="flex gap-4 justify-end mt-8 w-full">
          <button
            onClick={handleUpdate}
            className={`flex items- gap-2 px-6 py-3 rounded-full text-white ${
              editData.isCompleted ? "bg-lime-400" : "bg-slate-400"
            }`}
          >
            <Image
              src="/codeit/check.png"
              alt="Check Icon"
              width={20}
              height={20}
            />
            수정 완료
          </button>
          <button
            onClick={handleDelete}
            className={`flex items-center gap-4 px-6 py-3 rounded-full text-white ${
              editData.isCompleted ? "bg-rose-500" : "bg-red-500"
            }`}
          >
            <Image
              src="/codeit/X.png"
              alt="Delete Icon"
              width={20}
              height={20}
            />
            삭제하기
          </button>
        </div>
      </div>
    </div>
  );
};

export default TodoDetail;
