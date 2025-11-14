export function ErrorMessage({ message }) {
  return (
    <div className="p-4 bg-red-100 text-red-700 rounded-xl">
      {message || "Something went wrong."}
    </div>
  );
}
