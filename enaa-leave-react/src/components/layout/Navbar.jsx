export default function Navbar() {
    const user = JSON.parse(localStorage.getItem("user"));

    return (
        <header className="fixed top-0 left-64 right-0 h-20 bg-white border-b border-gray-200 px-8 flex items-center justify-between">

            {/* Left */}
            <div>
                <h2 className="text-xl font-semibold text-gray-800">
                    Bonjour, {user?.name || "Utilisateur"} 👋
                </h2>

                <p className="text-sm text-gray-400">
                    Bienvenue dans votre espace
                </p>
            </div>

            {/* Right */}
            <div className="flex items-center gap-5">

                {/* Notification */}
                <button className="relative w-10 h-10 rounded-full hover:bg-gray-100">
                    🔔

                    <span className="absolute top-1 right-1 w-2 h-2 bg-red-500 rounded-full"></span>
                </button>

                {/* User */}
                <div className="flex items-center gap-3">

                    <div className="w-10 h-10 rounded-full bg-emerald-100 text-emerald-600 flex items-center justify-center font-bold">
                        {user?.name?.charAt(0).toUpperCase() || "U"}
                    </div>

                    <div>
                        <p className="text-sm font-semibold text-gray-700">
                            {user?.name || "Utilisateur"}
                        </p>

                        <p className="text-xs text-gray-400">
                            {user?.role || "Employé"}
                        </p>
                    </div>

                </div>

            </div>

        </header>
    );
}