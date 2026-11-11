
export default function Notice({ isError = false }) {
  const boxStyle = {
    backgroundColor: "#eef2ff",
    padding: "16px",
    borderRadius: "12px",
    border: `2px solid ${isError ? "#dc2626" : "#4f46e5"}`, // red on error, indigo otherwise
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-indigo-500 to-purple-700 p-6">
      <div className="w-full max-w-md bg-white rounded-2xl shadow-2xl p-8 text-center space-y-4">
        <h2 className="text-2xl font-bold text-indigo-600">Notice</h2>
        <div style={boxStyle} className="text-gray-600 text-left shadow-sm">
          {isError
            ? "Something went wrong. Try again."
            : "Your changes have been saved."}
        </div>
      </div>
    </div>
  );
}