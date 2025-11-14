import { useState } from "react";
import Header from "./components/Header";
import { Footer } from "./components/Footer";
import { TaskCard } from "./components/TaskCard";
import "./App.css";

function App() {
  // const [count, setCount] = useState(0);

  const sampleTask = {
    id: 1,
    title: "Sample Task",
    description: "This is a demo task",
    status: "Pending",
  };

  return (
    <>
      <Header />
      <main className="p-6 max-w-4xl mx-auto">
        <TaskCard task={sampleTask} />
      </main>
      <Footer />
    </>
  );
}

export default App;
