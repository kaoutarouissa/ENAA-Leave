export default function RhDashboard() {
    return (
        <div className="space-y-8">
            <section className="rounded-[2rem] bg-gradient-to-r from-cyan-950 via-slate-900 to-indigo-900 p-8 text-white shadow-xl shadow-slate-950/20">
                <p className="text-xs font-semibold uppercase tracking-[0.35em] text-cyan-300">
                    Espace RH
                </p>
                <h1 className="mt-3 text-3xl font-bold sm:text-4xl">
                    Vue d’ensemble des absences et du suivi administratif.
                </h1>
                <p className="mt-4 max-w-2xl text-sm leading-6 text-slate-300">
                    Centralisez les demandes, préparez les validations et gardez une lecture claire des congés de l’entreprise.
                </p>
            </section>

            <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-4">
                {[
                    ["Salariés actifs", "128"],
                    ["Congés en cours", "9"],
                    ["Documents en attente", "6"],
                    ["Demandes clôturées", "41"],
                ].map(([title, value]) => (
                    <div key={title} className="rounded-3xl border border-slate-200 bg-white p-6 shadow-sm">
                        <p className="text-sm font-medium text-slate-500">{title}</p>
                        <p className="mt-4 text-4xl font-bold text-slate-900">{value}</p>
                    </div>
                ))}
            </div>

            <div className="grid gap-6 lg:grid-cols-[1.3fr_0.7fr]">
                <div className="rounded-[2rem] border border-slate-200 bg-white p-6 shadow-sm">
                    <h2 className="text-xl font-semibold text-slate-900">Flux RH</h2>
                    <p className="mt-1 text-sm text-slate-500">Les prochaines actions à traiter</p>
                    <div className="mt-6 space-y-4">
                        {[
                            ["Renouveler les justificatifs", "2 dossiers"],
                            ["Valider les congés d’été", "5 demandes"],
                            ["Préparer l’export mensuel", "1 fichier"],
                        ].map(([title, detail]) => (
                            <div key={title} className="flex items-center justify-between rounded-2xl border border-slate-200 px-4 py-4">
                                <div>
                                    <p className="font-medium text-slate-900">{title}</p>
                                    <p className="text-sm text-slate-500">{detail}</p>
                                </div>
                                <span className="rounded-full bg-slate-100 px-3 py-1 text-xs font-semibold text-slate-600">
                                    Suivi
                                </span>
                            </div>
                        ))}
                    </div>
                </div>

                <div className="rounded-[2rem] border border-slate-200 bg-white p-6 shadow-sm">
                    <h2 className="text-xl font-semibold text-slate-900">Statut rapide</h2>
                    <div className="mt-6 space-y-4">
                        <div className="rounded-2xl bg-emerald-50 p-4 text-emerald-700">
                            <p className="text-sm font-medium">Taux de disponibilité</p>
                            <p className="mt-2 text-3xl font-bold">92%</p>
                        </div>
                        <div className="rounded-2xl bg-sky-50 p-4 text-sky-700">
                            <p className="text-sm font-medium">Demandes traitées</p>
                            <p className="mt-2 text-3xl font-bold">84%</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}