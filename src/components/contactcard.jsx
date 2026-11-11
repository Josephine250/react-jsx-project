export default function ContactCard(){

        return (
            <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-indigo-500 to-purple-700 p-6">
                <div className="card w-full max-w-md bg-white rounded-2xl shadow-2xl p-8 text-center">
                    <img src="amara.jpg" alt="Amara" className="w-24 h-24 rounded-full object-cover bg-indigo-50 ring-4 ring-indigo-100 shadow-lg mx-auto mb-5"/>
                    <ul className="bg-indigo-50 rounded-xl p-6 mt-6 space-y-3 text-gray-500 text-lg">
                     <li className="font-semibold text-indigo-600">amara@example.org</li>
                      <li>+250 788 000 000<br/>Weekdays, 8:00-17:00</li>
                      </ul>
                       <input type="button" placeholder="submit" aria-label="Close" className="mt-6 w-32 h-10 rounded-xl bg-indigo-600 hover:bg-indigo-700 text-white font-semibold shadow-lg cursor-pointer focus:outline-none focus:ring-4 focus:ring-indigo-200"/>
                </div>
            </div>
        )
}