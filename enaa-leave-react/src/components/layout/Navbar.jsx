import { Bell, Search, UserCircle2 } from "lucide-react";

function getUser() {
    try {
        return JSON.parse(localStorage.getItem("user"));
    } catch {
        return null;
    }
}

export default function Navbar() {
    const user = getUser();
    const displayName = user?.name || user?.email || "Utilisateur";
    const displayRole = user?.role || "Employé";

    return (
        <header className="fixed top-0 left-0 right-0 z-30 h-20 border-b border-slate-200/80 bg-white/85 backdrop-blur-xl lg:left-72">
            <div className="flex h-full items-center justify-between px-4 sm:px-6 lg:px-8">
                <div>
                    <p className="text-xs font-semibold uppercase tracking-[0.35em] text-slate-400">
                        Espace personnel
                    </p>
                    <h2 className="mt-1 text-xl font-semibold text-slate-900">
                        Bonjour, {displayName} 👋
                    </h2>
                    <p className="text-sm text-slate-500">
                        {displayRole} • Bienvenue dans votre espace
                    </p>
                </div>

                <div className="flex items-center gap-3 sm:gap-4">
                    <label className="hidden items-center gap-2 rounded-full border border-slate-200 bg-slate-50 px-4 py-2 text-sm text-slate-400 md:flex">
                        <Search className="h-4 w-4" />
                        <input
                            type="text"
                            placeholder="Rechercher..."
                            className="w-44 bg-transparent outline-none placeholder:text-slate-400"
                        />
                    </label>

                    <button className="relative flex h-10 w-10 items-center justify-center rounded-full border border-slate-200 bg-white text-slate-600 shadow-sm transition hover:bg-slate-50">
                        <Bell className="h-4 w-4" />
                        <span className="absolute right-2 top-2 h-2 w-2 rounded-full bg-rose-500" />
                    </button>

                    <div className="flex items-center gap-3 rounded-full border border-slate-200 bg-white px-3 py-2 shadow-sm">
                        <div className="flex h-10 w-10 items-center justify-center rounded-full bg-emerald-100 text-sm font-bold text-emerald-700">
                            {(displayName || "U").charAt(0).toUpperCase()}
                        </div>

                        <div className="hidden sm:block">
                            <p className="text-sm font-semibold text-slate-800">
                                {displayName}
                            </p>
                            <p className="text-xs text-slate-400">
                                {displayRole}
                            </p>
                        </div>

                        <UserCircle2 className="h-4 w-4 text-slate-400" />
                    </div>
                </div>
            </div>
        </header>
    );
}