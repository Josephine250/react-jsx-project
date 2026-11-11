
export default function BadgeCard({ isActive = true }) {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-indigo-500 to-purple-700 p-6">
      <div className="w-full max-w-md bg-white rounded-2xl shadow-2xl p-8 text-center space-y-4">
        <h2 className="text-2xl font-bold text-indigo-600">Badge</h2>
        <span
          className={`inline-block rounded-full bg-indigo-50 ring-2 ring-indigo-100 px-4 py-1 text-sm font-semibold ${
            isActive ? "text-green-600" : "text-gray-500"
          }`}
        >
          {isActive ? "Active" : "Inactive"}
        </span>
      </div>
    </div>
  );
}