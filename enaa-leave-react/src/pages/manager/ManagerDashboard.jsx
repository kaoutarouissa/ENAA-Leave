export default function ManagerDashboard() {
    return (
        <div className="space-y-8">
            <section className="rounded-[2rem] bg-gradient-to-r from-slate-950 via-slate-900 to-emerald-900 p-8 text-white shadow-xl shadow-slate-950/20">
                <div className="max-w-2xl">
                    <p className="text-xs font-semibold uppercase tracking-[0.35em] text-emerald-300">
                        Tableau manager
                    </p>
                    <h1 className="mt-3 text-3xl font-bold sm:text-4xl">
                        Pilotage des congés et validation des demandes.
                    </h1>
                    <p className="mt-4 text-sm leading-6 text-slate-300">
                        Suivez les demandes de votre équipe, gardez une vue claire sur les absences et traitez les validations plus vite.
                    </p>
                </div>
            </section>

            <div className="grid gap-6 lg:grid-cols-3">
                {[
                    ["Demandes en attente", "12", "bg-amber-50 text-amber-700"],
                    ["Équipes suivies", "5", "bg-sky-50 text-sky-700"],
                    ["Validations ce mois", "34", "bg-emerald-50 text-emerald-700"],
                ].map(([title, value, tone]) => (
                    <div key={title} className="rounded-3xl border border-slate-200 bg-white p-6 shadow-sm">
                        <p className="text-sm font-medium text-slate-500">{title}</p>
                        <div className="mt-4 flex items-end justify-between gap-4">
                            <span className="text-4xl font-bold text-slate-900">{value}</span>
                            <span className={`rounded-full px-3 py-1 text-xs font-semibold ${tone}`}>
                                Actif
                            </span>
                        </div>
                    </div>
                ))}
            </div>

            <div className="rounded-[2rem] border border-slate-200 bg-white p-6 shadow-sm">
                <div className="flex items-center justify-between gap-4 border-b border-slate-100 pb-4">
                    <div>
                        <h2 className="text-xl font-semibold text-slate-900">Dernières demandes</h2>
                        <p className="text-sm text-slate-500">Vue rapide des actions à traiter</p>
                    </div>
                    <button className="rounded-full border border-slate-200 px-4 py-2 text-sm font-medium text-slate-600 transition hover:bg-slate-50">
                        Voir tout
                    </button>
                </div>

                <div className="mt-6 overflow-hidden rounded-2xl border border-slate-200">
                    <table className="w-full text-left text-sm">
                        <thead className="bg-slate-50 text-slate-500">
                            <tr>
                                <th className="px-4 py-3 font-medium">Employé</th>
                                <th className="px-4 py-3 font-medium">Type</th>
                                <th className="px-4 py-3 font-medium">Période</th>
                                <th className="px-4 py-3 font-medium">Statut</th>
                            </tr>
                        </thead>
                        <tbody className="divide-y divide-slate-100 bg-white text-slate-700">
                            <tr>
                                <td className="px-4 py-3 font-medium">Amina B.</td>
                                <td className="px-4 py-3">Congé payé</td>
                                <td className="px-4 py-3">10 - 15 Sept</td>
                                <td className="px-4 py-3"><span className="rounded-full bg-amber-50 px-3 py-1 text-xs font-semibold text-amber-700">En attente</span></td>
                            </tr>
                            <tr>
                                <td className="px-4 py-3 font-medium">Yassine R.</td>
                                <td className="px-4 py-3">Maladie</td>
                                <td className="px-4 py-3">12 - 14 Août</td>
                                <td className="px-4 py-3"><span className="rounded-full bg-emerald-50 px-3 py-1 text-xs font-semibold text-emerald-700">Validée</span></td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    );
}