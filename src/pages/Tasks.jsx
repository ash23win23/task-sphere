import { useEffect, useState } from "react";
import { TaskCard } from "../components/TaskCard";
import { Loader } from "../components/Loader";
import { ErrorMessage } from "../components/ErrorMessage";

export function Tasks() {
  const [tasks, setTasks] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    async function fetchTasks() {
      try {
        const res = await fetch("http://localhost:3001/tasks");
        if (!res.ok) throw new Error("Failed to load tasks");
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

  if (loading) return <Loader />;
  if (error) return <ErrorMessage message={error} />;

  return (
    <div className="p-6 space-y-4">
      <h2 className="text-2xl font-bold">Tasks</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {sampleTasks.map((task) => (
          <TaskCard key={task.id} task={task} />
        ))}
      </div>
    </div>
  );
}
