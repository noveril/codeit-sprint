import React from "react";
import TodoList from "../src/components/TodoList";
import Layout from "../src/components/Layout";
import { TodoProvider } from "../src/contexts/TodoContext";

const Home = () => {
  return (
    <TodoProvider>
      <Layout>
        <TodoList />
      </Layout>
    </TodoProvider>
  );
};

export default Home;
