export default function RegistrationForm(){
        return(
            <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-indigo-500 to-purple-700 p-6">
                <form className="registration-form w-full max-w-md bg-white rounded-2xl shadow-2xl p-8 flex flex-col gap-2 items-center justify-center" onClick="{handleclick}">
                      <label htmlFor="email" className="self-start text-gray-500 text-sm font-medium mt-2">Email address</label>
                      <input id="email" className="w-full rounded-lg border border-gray-300 p-2 text-gray-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500" type="email" placeholder = "enter your email" required/>

                      <label htmlFor="email" className="self-start text-gray-500 text-sm font-medium mt-2">Fname </label>
                      <input className="w-full rounded-lg border border-gray-300 p-2 text-gray-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500" type="text" placeholder = "enter your Fname" required />
                       
                       <label htmlFor="email" className="self-start text-gray-500 text-sm font-medium mt-2">Lname </label>
                       <input className="w-full rounded-lg border border-gray-300 p-2 text-gray-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500" type="text" placeholder = "enter your Lname" required />

                      <label htmlFor="email" className="self-start text-gray-500 text-sm font-medium mt-2">password</label>
                      <input id="password" className="w-full rounded-lg border border-gray-300 p-2 text-gray-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500" type="password" autoComplete="password" aria-required="true" />

                      <label htmlFor="email" className="self-start text-gray-500 text-sm font-medium mt-2">gender</label>
                      <input id="email" className="w-full rounded-lg border border-gray-300 p-2 text-gray-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500" type="email" autoComplete="email" aria-required="true" />

                </form>
            </div>
        )
}