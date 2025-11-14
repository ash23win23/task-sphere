export default function Header() {
  return (
    <header className="w-full p-4 shadow-md bg-white flex justify-between items-center">
      <h1 className="text-xl font-bold">TaskSphere</h1>
      <nav className="flex gap-4 text-base">
        <a href="/dashboard">Dashboard</a>
        <a href="/tasks">Tasks</a>
        <a href="/profile">Profile</a>
      </nav>
    </header>
  );
}
