export function Register() {
  return (
    <div className="flex flex-col items-center justify-center h-full p-6">
      <h2 className="text-2xl font-bold mb-4">Create Account</h2>
      <form className="w-full max-w-sm flex flex-col gap-4">
        <input className="border p-2 rounded" placeholder="Name" />
        <input className="border p-2 rounded" placeholder="Email" />
        <input
          className="border p-2 rounded"
          placeholder="Password"
          type="password"
        />
        <button className="p-2 bg-black text-white rounded-xl">Register</button>
      </form>
    </div>
  );
}
