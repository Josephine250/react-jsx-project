export default function Greetings() {
  const user = {
    name: "Josephine",
    city: "Kigali",
    imagePath: "src/assets/WhatsApp Image 2026-10-20 at 11.52.31.jpeg", // change to your real image path
  };
  const year = 2026;
  const nextYear = year + 1;

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-indigo-500 to-purple-700 p-6">
      <div className="w-full max-w-md bg-white rounded-2xl shadow-2xl p-8 text-center">
        <div className="mb-5 flex justify-center">
          <img
            src={user.imagePath}
            alt={`Profile photo of ${user.name}`}
            width={96}
            height={96}
            className="w-24 h-24 rounded-full object-cover bg-indigo-50 ring-4 ring-indigo-100 shadow-lg"
          />
        </div>

        <h1 className="text-3xl font-bold text-indigo-600 mb-3">
          Hello, {user.name}!
        </h1>

        <p className="text-gray-500 text-lg">Welcome from {user.city}</p>

        <div className="bg-indigo-50 rounded-xl p-6 mt-6">
          <p className="text-gray-500 text-sm font-medium uppercase tracking-wider">
            Next Year
          </p>
          <h2 className="text-5xl font-extrabold text-indigo-600 mt-2">
            {nextYear}
          </h2>
        </div>

        <p className="text-gray-400 text-sm mt-6">Have a wonderful day!</p>
      </div>
    </div>
  );
}