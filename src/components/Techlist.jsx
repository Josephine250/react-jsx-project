
const technologies = [
  { id: "react", name: "React" },
  { id: "tailwind", name: "Tailwind CSS" },
  { id: "vite", name: "Vite" },
];

export default function TechList() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-indigo-500 to-purple-700 p-6">
      <div className="w-full max-w-md bg-white rounded-2xl shadow-2xl p-8 text-center space-y-4">
        <h2 className="text-2xl font-bold text-indigo-600">Technologies</h2>
        <ul className="space-y-2">
          {/* This comment does not appear on screen */}
          {technologies.map((tech) => (
            <li
              key={tech.id}
              className="bg-indigo-50 rounded-xl px-4 py-3 text-indigo-600 font-semibold shadow-sm"
            >
              {tech.name}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}