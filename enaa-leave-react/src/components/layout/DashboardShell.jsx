import Navbar from "./Navbar";
import Sidebar from "./Sidebar";

export default function DashboardShell({ children }) {
    return (
        <div className="min-h-screen bg-slate-100 text-slate-900">
            <Sidebar />

            <div className="min-h-screen lg:pl-72">
                <Navbar />

                <main className="pt-20">
                    <div className="px-4 py-6 sm:px-6 lg:px-8">
                        {children}
                    </div>
                </main>
            </div>
        </div>
    );
}
