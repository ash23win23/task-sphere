import { useEffect, useState } from "react";
import Header from "./components/Header";
import { Footer } from "./components/Footer";
import { TaskCard } from "./components/TaskCard";
import { Loader } from "./components/Loader";
import { ErrorMessage } from "./components/ErrorMessage";
import "./App.css";

function App() {
  const [tasks, setTasks] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);


  useEffect(() => {
    async function fetchTasks() {
      try {
        const res = await fetch("http://localhost:3001/tasks");
        if (!res.ok) throw new Error("Failed to fetch tasks");

        const data = await res.json();
        setTasks(data);
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    }

    fetchTasks();
  }, []);

  return (
    <>
      <Header />

      <main className="p-6 max-w-5xl mx-auto space-y-4">
        <h2 className="text-2xl font-bold">All Tasks</h2>

        {loading && <Loader />}
        {error && <ErrorMessage message={error} />}

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {tasks.map(task => (
            <TaskCard key={task.id} task={task} />
          ))}
        </div>
      </main>
      <Footer />
    </>
  );
}

export default App;
