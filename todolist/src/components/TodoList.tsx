"use client";
import React from "react";
import { useRouter } from "next/navigation";
import { useTodo } from "../contexts/TodoContext";
import TodoItem from "./TodoItem";
import AddTodoForm from "./AddTodoForm";
import Image from "next/image";

const TodoList = () => {
  const router = useRouter();
  const { todos, toggleTodo, addTodo } = useTodo();

  const ongoingTodos = todos.filter((todo) => !todo.isCompleted);
  const completedTodos = todos.filter((todo) => todo.isCompleted);

  return (
    <div className="max-w-[1200px] mx-auto py-10 px-4">
      <AddTodoForm onAdd={addTodo} />
      <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
        {/* 진행 중 항목 */}
        <div>
          <h2 className="text-green-700 bg-lime-300 text-[18px] font-bold rounded-[23px] w-[120px] h-[36px] flex items-center justify-center mb-6">
            TO DO
          </h2>
          {ongoingTodos.length > 0 ? (
            ongoingTodos.map((todo) => (
              <div
                key={todo.id}
                onClick={() => router.push(`/items/${todo.id}`)}
                className="cursor-pointer"
              >
                <TodoItem todo={todo} onToggle={toggleTodo} />
              </div>
            ))
          ) : (
            <div className="flex flex-col items-center justify-center">
              <Image
                src="/codeit/Type=Todo, Size=Large@2x.png"
                alt="No Todo tasks"
                width={150}
                height={150}
              />
              <p className="text-gray-500 mt-4">
                할 일이 없어요. TODO를 새로 추가해주세요!
              </p>
            </div>
          )}
        </div>

        {/* 완료된 항목 */}
        <div>
          <h2 className="text-yellow-400 bg-green-700 text-[18px] font-bold rounded-[23px] w-[120px] h-[36px] flex items-center justify-center mb-6">
            DONE
          </h2>
          {completedTodos.length > 0 ? (
            completedTodos.map((todo) => (
              <div
                key={todo.id}
                onClick={() => router.push(`/items/${todo.id}`)}
                className="cursor-pointer"
              >
                <TodoItem todo={todo} onToggle={toggleTodo} />
              </div>
            ))
          ) : (
            <div className="flex flex-col items-center justify-center">
              <Image
                src="/codeit/Type=Done, Size=Large@2x.png"
                alt="No completed tasks"
                width={150}
                height={150}
              />
              <p className="text-gray-500 mt-4">
                할 일을 다했어요. 새 할 일을 추가해주세요!
              </p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default TodoList;

// // // "use client";
// // // import React from "react";
// // // import { useRouter } from "next/navigation";
// // // import { useTodo } from "../contexts/TodoContext";
// // // import TodoItem from "./TodoItem";
// // // import AddTodoForm from "./AddTodoForm";
// // // import Image from "next/image";

// // // const TodoList = () => {
// // //   const router = useRouter();
// // //   const { todos, toggleTodo, addTodo } = useTodo();

// // //   const ongoingTodos = todos.filter((todo) => !todo.isCompleted);
// // //   const completedTodos = todos.filter((todo) => todo.isCompleted);

// // //   return (
// // //     <div className="max-w-[1200px] mx-auto py-10 px-4">
// // //       <div className="flex flex-col md:flex-row items-center justify-between mb-8 gap-4">
// // //         <AddTodoForm onAdd={addTodo} />
// // //       </div>
// // //       <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
// // //         {/* TO DO */}
// // //         <div>
// // //           <h2 className="text-green-700 bg-lime-300 text-[18px] font-bold rounded-[23px] w-[120px] h-[36px] flex items-center justify-center mb-6">
// // //             TO DO
// // //           </h2>
// // //           <div className="space-y-4">
// // //             {ongoingTodos.length > 0 ? (
// // //               ongoingTodos.map((todo) => (
// // //                 <div
// // //                   key={todo.id}
// // //                   onClick={() => router.push(`/items/${todo.id}`)}
// // //                 >
// // //                   <TodoItem todo={todo} onToggle={toggleTodo} />
// // //                 </div>
// // //               ))
// // //             ) : (
// // //               <div className="flex flex-col items-center justify-center">
// // //                 <Image
// // //                   src="/codeit/Type=Todo, Size=Large@2x.png"
// // //                   alt="No Todo tasks"
// // //                   width={150}
// // //                   height={150}
// // //                 />
// // //                 <p className="text-gray-500 mt-4">
// // //                   할 일이 없어요. TODO를 새로 추가해주세요!
// // //                 </p>
// // //               </div>
// // //             )}
// // //           </div>
// // //         </div>
// // //         {/* DONE */}
// // //         <div>
// // //           <h2 className="text-yellow-400 bg-green-700 text-[18px] font-bold rounded-[23px] w-[120px] h-[36px] flex items-center justify-center mb-6">
// // //             DONE
// // //           </h2>
// // //           <div className="space-y-4">
// // //             {completedTodos.length > 0 ? (
// // //               completedTodos.map((todo) => (
// // //                 <div
// // //                   key={todo.id}
// // //                   onClick={() => router.push(`/items/${todo.id}`)}
// // //                 >
// // //                   <TodoItem todo={todo} onToggle={toggleTodo} />
// // //                 </div>
// // //               ))
// // //             ) : (
// // //               <div className="flex flex-col items-center justify-center">
// // //                 <Image
// // //                   src="/codeit/Type=Done, Size=Large@2x.png"
// // //                   alt="No completed tasks"
// // //                   width={150}
// // //                   height={150}
// // //                 />
// // //                 <p className="text-gray-500 mt-4">
// // //                   아직 다 한 일이 없어요. 해야 할 일을 체크해주세요!
// // //                 </p>
// // //               </div>
// // //             )}
// // //           </div>
// // //         </div>
// // //       </div>
// // //     </div>
// // //   );
// // // };

// // // export default TodoList;
