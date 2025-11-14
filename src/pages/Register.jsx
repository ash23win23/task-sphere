import AuthLayout from "../layouts/AuthLayout";

export function Register() {
  return (
    <AuthLayout>
      <h2 className="text-2xl font-bold mb-4 text-center">Create Account</h2>
      <form className="w-full flex flex-col gap-4">
        <input className="border p-2 rounded" placeholder="Name" />
        <input className="border p-2 rounded" placeholder="Email" />
        <input
          className="border p-2 rounded"
          placeholder="Password"
          type="password"
        />
        <button className="p-2 bg-black text-white rounded-xl w-full">
          Register
        </button>
      </form>
    </AuthLayout>
  );
}
