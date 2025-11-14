export function TaskDetails() {
  return (
    <div className="p-6">
      <h2 className="text-2xl font-bold mb-2">Task Title</h2>
      <p className="text-gray-600 mb-4">Full task description goes here.</p>
      <button className="p-2 bg-black text-white rounded-xl">
        Mark as Complete
      </button>
    </div>
  );
}
