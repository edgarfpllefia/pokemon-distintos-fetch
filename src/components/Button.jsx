export function Button({ carga, onClick, children }) {
  return (
    <button
      onClick={onClick}
      className="bg-blue-500 text-white p-4 rounded-lg hover:bg-blue-600"
    >
      <div className="font-bold mb-2">{children}</div>
      <div className="text-2xl">{carga}ms</div>
    </button>
  );
}
