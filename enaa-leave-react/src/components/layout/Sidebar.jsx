export default function Sidebar() {
    return (
        <aside className="fixed left-0 top-0 h-screen w-64 bg-white border-r border-gray-200">
            
            {/* Logo */}
            <div className="h-20 flex items-center px-6 border-b">
                <div className="w-10 h-10 rounded-xl bg-emerald-500 flex items-center justify-center text-white font-bold">
                    L
                </div>

                <div className="ml-3">
                    <h1 className="font-bold text-gray-800">
                        Leave
                    </h1>
                    <p className="text-xs text-gray-400">
                        Gestion des congés
                    </p>
                </div>
            </div>

            {/* Menu */}
            <nav className="p-4 space-y-2">

                <a href="#" className="flex items-center gap-3 px-4 py-3 rounded-xl bg-emerald-50 text-emerald-600 font-medium">
                    🏠
                    <span>Dashboard</span>
                </a>

                <a href="#" className="flex items-center gap-3 px-4 py-3 rounded-xl text-gray-600 hover:bg-gray-50">
                    📅
                    <span>Mes congés</span>
                </a>

                <a href="#" className="flex items-center gap-3 px-4 py-3 rounded-xl text-gray-600 hover:bg-gray-50">
                    📊
                    <span>Mon solde</span>
                </a>

                <a href="#" className="flex items-center gap-3 px-4 py-3 rounded-xl text-gray-600 hover:bg-gray-50">
                    👤
                    <span>Mon profil</span>
                </a>

            </nav>

            {/* Logout */}
            <div className="absolute bottom-5 left-4 right-4">
                <button className="w-full flex items-center gap-3 px-4 py-3 rounded-xl text-red-500 hover:bg-red-50">
                    🚪
                    <span>Déconnexion</span>
                </button>
            </div>

        </aside>
    );
}