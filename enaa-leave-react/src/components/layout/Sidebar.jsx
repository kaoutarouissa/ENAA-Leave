import { CalendarDays, ChevronRight, LayoutDashboard, LogOut, UserRound, Wallet } from "lucide-react";
import { NavLink, useNavigate } from "react-router-dom";

function getUser() {
    try {
        return JSON.parse(localStorage.getItem("user"));
    } catch {
        return null;
    }
}

export default function Sidebar() {
    const navigate = useNavigate();
    const user = getUser();
    const homePath = user?.role === "manager" ? "/manager" : user?.role === "hr" ? "/rh" : "/dashboard";

    const handleLogout = () => {
        localStorage.removeItem("token");
        localStorage.removeItem("user");
        navigate("/login");
    };

    return (
        <aside className="fixed inset-y-0 left-0 z-40 hidden w-72 flex-col border-r border-slate-800/60 bg-slate-950 text-slate-100 lg:flex">
            <div className="flex h-20 items-center border-b border-white/10 px-6">
                <div className="flex h-11 w-11 items-center justify-center rounded-2xl bg-gradient-to-br from-emerald-400 to-cyan-500 text-lg font-black text-white shadow-lg shadow-emerald-950/40">
                    L
                </div>

                <div className="ml-3">
                    <h1 className="text-sm font-semibold tracking-[0.2em] text-white">
                        LEAVE
                    </h1>
                    <p className="text-xs text-slate-400">
                        Gestion des congés
                    </p>
                </div>
            </div>

            <div className="flex-1 overflow-y-auto px-4 py-6">
                <div className="rounded-3xl border border-white/10 bg-white/5 p-4">
                    <p className="text-xs uppercase tracking-[0.3em] text-slate-400">
                        Bonjour
                    </p>
                    <h2 className="mt-2 text-lg font-semibold text-white">
                        {user?.name || user?.email || "Utilisateur"}
                    </h2>
                    <p className="text-sm text-slate-400">
                        {user?.role || "Employé"}
                    </p>
                </div>

                <nav className="mt-6 space-y-2">
                    <NavLink
                        to={homePath}
                        className={({ isActive }) => `flex items-center justify-between rounded-2xl px-4 py-3 text-sm font-medium transition ${isActive ? "bg-emerald-500 text-white shadow-lg shadow-emerald-950/30" : "text-slate-300 hover:bg-white/8 hover:text-white"}`}
                    >
                        <span className="flex items-center gap-3">
                            <LayoutDashboard className="h-4 w-4" />
                            Dashboard
                        </span>
                        <ChevronRight className="h-4 w-4 opacity-70" />
                    </NavLink>

                    <button type="button" className="flex w-full items-center justify-between rounded-2xl px-4 py-3 text-sm font-medium text-slate-300 transition hover:bg-white/8 hover:text-white">
                        <span className="flex items-center gap-3">
                            <CalendarDays className="h-4 w-4" />
                            Mes congés
                        </span>
                        <ChevronRight className="h-4 w-4 opacity-50" />
                    </button>

                    <button type="button" className="flex w-full items-center justify-between rounded-2xl px-4 py-3 text-sm font-medium text-slate-300 transition hover:bg-white/8 hover:text-white">
                        <span className="flex items-center gap-3">
                            <Wallet className="h-4 w-4" />
                            Mon solde
                        </span>
                        <ChevronRight className="h-4 w-4 opacity-50" />
                    </button>

                    <button type="button" className="flex w-full items-center justify-between rounded-2xl px-4 py-3 text-sm font-medium text-slate-300 transition hover:bg-white/8 hover:text-white">
                        <span className="flex items-center gap-3">
                            <UserRound className="h-4 w-4" />
                            Mon profil
                        </span>
                        <ChevronRight className="h-4 w-4 opacity-50" />
                    </button>
                </nav>

                <button
                    type="button"
                    onClick={handleLogout}
                    className="mt-8 flex w-full items-center justify-center gap-3 rounded-2xl border border-rose-500/20 bg-rose-500/10 px-4 py-3 text-sm font-semibold text-rose-200 transition hover:bg-rose-500/20"
                >
                    <LogOut className="h-4 w-4" />
                    Déconnexion
                </button>
            </div>
        </aside>
    );
}