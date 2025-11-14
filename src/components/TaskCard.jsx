export function TaskCard({ task }) {
  return (
    <div className="p-4 rounded-xl shadow bg-white">
      <h3 className="font-semibold text-lg">{task.title}</h3>
      <p className="text-gray-600 text-sm mt-1">{task.description}</p>
      <p className="text-xs mt-2">Status: {task.status}</p>
    </div>
  );
}
