import React, { useState } from "react";

export default function Dashboard() {
  const [formData, setFormData] = useState({
    typeConge: "PAID",
    dateDebut: "",
    dateFin: "",
    typeJournee: "FULL",
    motif: "",
    file: null,
  });

  const [submittedRequests, setSubmittedRequests] = useState([
    {
      id: 1,
      type: "Congé Payé",
      debut: "2026-09-10",
      fin: "2026-09-15",
      duree: "4 Jours",
      statut: "EN_ATTENTE",
    },
    {
      id: 2,
      type: "Maladie",
      debut: "2026-08-12",
      fin: "2026-08-14",
      duree: "2 Jours",
      statut: "VALIDE",
    },
  ]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleFileChange = (e) => {
    if (e.target.files && e.target.files[0]) {
      setFormData((prev) => ({ ...prev, file: e.target.files[0] }));
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!formData.dateDebut || !formData.dateFin) {
      alert("Veuillez sélectionner les dates de début et de fin.");
      return;
    }

    const newRequest = {
      id: Date.now(),
      type:
        formData.typeConge === "PAID"
          ? "Congé Payé"
          : formData.typeConge === "SICK"
          ? "Congé Maladie"
          : "Autorisation",
      debut: formData.dateDebut,
      fin: formData.dateFin,
      duree: formData.typeJournee === "FULL" ? "1 Jour" : "0.5 Jour",
      statut: "EN_ATTENTE",
    };

    setSubmittedRequests([newRequest, ...submittedRequests]);
    setFormData({
      typeConge: "PAID",
      dateDebut: "",
      dateFin: "",
      typeJournee: "FULL",
      motif: "",
      file: null,
    });
  };

  return (
    <div className="space-y-8 w-full max-w-7xl mx-auto p-4 sm:p-6">
      {/* En-tête de la section */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 border-b border-slate-200 pb-5">
        <div>
          <h1 className="text-2xl font-bold text-slate-900">Tableau de bord</h1>
          <p className="text-sm text-slate-500 mt-1">Consultez vos soldes et effectuez une nouvelle demande.</p>
        </div>
        <div className="inline-flex items-center gap-2 rounded-xl bg-emerald-50 border border-emerald-200 px-4 py-2 text-xs font-semibold text-emerald-700">
          <span className="h-2 w-2 rounded-full bg-emerald-500 animate-pulse"></span>
          Compte Actif — Année 2026
        </div>
      </div>

      {/* 1. Cartes de solde */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <div className="bg-white p-6 rounded-2xl border border-slate-200 shadow-sm">
          <div className="flex justify-between items-start mb-4">
            <div>
              <span className="text-xs font-semibold uppercase tracking-wider text-slate-400">Solde Annuel</span>
              <h3 className="text-lg font-bold text-slate-800">Congés Payés</h3>
            </div>
            <div className="p-2.5 bg-emerald-50 text-emerald-600 rounded-xl">
              <svg className="w-6 h-6" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M6.75 3v2.25M17.25 3v2.25M3 18.75V7.5a2.25 2.25 0 012.25-2.25h13.5A2.25 2.25 0 0121 7.5v11.25m-18 0A2.25 2.25 0 005.25 21h13.5A2.25 2.25 0 0021 18.75m-18 0v-7.5A2.25 2.25 0 015.25 9h13.5A2.25 2.25 0 0121 11.25v7.5"/></svg>
            </div>
          </div>
          <div className="flex items-baseline gap-2 mb-3">
            <span className="text-3xl font-extrabold text-slate-900">18</span>
            <span className="text-sm font-medium text-slate-500">/ 22 Jours</span>
          </div>
          <div className="w-full bg-slate-100 rounded-full h-2">
            <div className="bg-emerald-500 h-2 rounded-full" style={{ width: "81%" }}></div>
          </div>
        </div>

        <div className="bg-white p-6 rounded-2xl border border-slate-200 shadow-sm">
          <div className="flex justify-between items-start mb-4">
            <div>
              <span className="text-xs font-semibold uppercase tracking-wider text-slate-400">Incapacité</span>
              <h3 className="text-lg font-bold text-slate-800">Congés Maladie</h3>
            </div>
            <div className="p-2.5 bg-rose-50 text-rose-600 rounded-xl">
              <svg className="w-6 h-6" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M12 9v3.75m9-.75a9 9 0 11-18 0 9 9 0 0118 0zm-9 3.75h.008v.008H12v-.008z"/></svg>
            </div>
          </div>
          <div className="flex items-baseline gap-2 mb-3">
            <span className="text-3xl font-extrabold text-slate-900">2</span>
            <span className="text-sm font-medium text-slate-500">Jours pris</span>
          </div>
          <p className="text-xs text-rose-500 font-medium">Justificatif requis sous 48h</p>
        </div>

        <div className="bg-white p-6 rounded-2xl border border-slate-200 shadow-sm">
          <div className="flex justify-between items-start mb-4">
            <div>
              <span className="text-xs font-semibold uppercase tracking-wider text-slate-400">Permissions</span>
              <h3 className="text-lg font-bold text-slate-800">Autorisations d'absence</h3>
            </div>
            <div className="p-2.5 bg-indigo-50 text-indigo-600 rounded-xl">
              <svg className="w-6 h-6" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M12 6v6h4.5m4.5 0a9 9 0 11-18 0 9 9 0 0118 0z"/></svg>
            </div>
          </div>
          <div className="flex items-baseline gap-2 mb-3">
            <span className="text-3xl font-extrabold text-slate-900">4.5</span>
            <span className="text-sm font-medium text-slate-500">Heures cumulées</span>
          </div>
          <p className="text-xs text-slate-400">Demandes d'heures spéciales</p>
        </div>
      </div>

      {/* 2. Formulaire de demande */}
      <div className="bg-white rounded-2xl border border-slate-200 shadow-sm p-6 sm:p-8">
        <h2 className="text-xl font-bold text-slate-900 mb-6 border-b border-slate-100 pb-4">Nouvelle Demande</h2>

        <form onSubmit={handleSubmit} className="space-y-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <label className="block text-sm font-medium text-slate-700 mb-2">Type de congé *</label>
              <select
                name="typeConge"
                value={formData.typeConge}
                onChange={handleChange}
                className="w-full rounded-xl border border-slate-300 px-4 py-3 text-slate-800 focus:ring-2 focus:ring-emerald-500/20 focus:border-emerald-500 outline-none"
                required
              >
                <option value="PAID">Congé Payé</option>
                <option value="SICK">Congé Maladie (Arrêt de travail)</option>
                <option value="AUTHORIZATION">Autorisation d'absence (Heures)</option>
              </select>
            </div>

            <div>
              <label className="block text-sm font-medium text-slate-700 mb-2">Format de journée</label>
              <div className="grid grid-cols-3 gap-2">
                {["FULL", "MORNING", "AFTERNOON"].map((format) => (
                  <button
                    key={format}
                    type="button"
                    onClick={() => setFormData((prev) => ({ ...prev, typeJournee: format }))}
                    className={`py-3 px-2 rounded-xl border text-xs font-semibold transition ${
                      formData.typeJournee === format
                        ? "border-emerald-600 bg-emerald-50 text-emerald-700"
                        : "border-slate-200 text-slate-600 hover:bg-slate-50"
                    }`}
                  >
                    {format === "FULL" ? "Journée" : format === "MORNING" ? "Matin" : "Après-midi"}
                  </button>
                ))}
              </div>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <label className="block text-sm font-medium text-slate-700 mb-2">Date de début *</label>
              <input
                type="date"
                name="dateDebut"
                value={formData.dateDebut}
                onChange={handleChange}
                className="w-full rounded-xl border border-slate-300 px-4 py-3 text-slate-800 focus:ring-2 focus:ring-emerald-500/20 focus:border-emerald-500 outline-none"
                required
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-slate-700 mb-2">Date de fin *</label>
              <input
                type="date"
                name="dateFin"
                value={formData.dateFin}
                onChange={handleChange}
                className="w-full rounded-xl border border-slate-300 px-4 py-3 text-slate-800 focus:ring-2 focus:ring-emerald-500/20 focus:border-emerald-500 outline-none"
                required
              />
            </div>
          </div>

          <div>
            <label className="block text-sm font-medium text-slate-700 mb-2">Motif</label>
            <textarea
              name="motif"
              rows="3"
              value={formData.motif}
              onChange={handleChange}
              placeholder="Raison de votre absence..."
              className="w-full rounded-xl border border-slate-300 px-4 py-3 text-slate-800 focus:ring-2 focus:ring-emerald-500/20 focus:border-emerald-500 outline-none"
            ></textarea>
          </div>


{/* ================= FORMATEUR ================= */}
{user?.role === "formateur" && (
  <div className="mt-6 rounded-2xl border border-gray-200 bg-gray-50 p-6">

    {/* Titre */}
    <div className="mb-5">
      <h3 className="text-lg font-semibold text-gray-800">
        Organisation des cours et évaluations
      </h3>

      <p className="mt-1 text-sm text-gray-500">
        Pour une absence en tant que formateur, veuillez choisir un
        collègue remplaçant ou proposer des dates de rattrapage pour
        les modules impactés.
      </p>
    </div>

    {/* Collègue remplaçant */}
    <div className="mb-6">
      <label className="mb-2 block text-sm font-medium text-gray-700">
        Collègue remplaçant
      </label>

      <select
        name="remplacant_id"
        value={formData.remplacant_id}
        onChange={handleChange}
        className="w-full rounded-xl border border-gray-300 bg-white px-4 py-3 text-sm
                   outline-none transition
                   focus:border-green-500 focus:ring-2 focus:ring-green-100"
      >
        <option value="">
          Sélectionner un collègue
        </option>

        {collegues.map((collegue) => (
          <option key={collegue.id} value={collegue.id}>
            {collegue.name}
          </option>
        ))}
      </select>
    </div>

    {/* OU */}
    <div className="mb-6 flex items-center gap-4">
      <div className="h-px flex-1 bg-gray-200"></div>

      <span className="text-xs font-medium uppercase text-gray-400">
        ou
      </span>

      <div className="h-px flex-1 bg-gray-200"></div>
    </div>

    {/* Dates de rattrapage */}
    <div>
      <label className="mb-3 block text-sm font-medium text-gray-700">
        Dates de rattrapage
      </label>

      <div className="space-y-4">

        {/* Module */}
        <div>
          <label className="mb-2 block text-xs font-medium text-gray-500">
            Module impacté
          </label>

          <select
            name="module_id"
            value={formData.module_id}
            onChange={handleChange}
            className="w-full rounded-xl border border-gray-300 bg-white px-4 py-3 text-sm
                       outline-none transition
                       focus:border-green-500 focus:ring-2 focus:ring-green-100"
          >
            <option value="">
              Sélectionner un module
            </option>

            {modules.map((module) => (
              <option key={module.id} value={module.id}>
                {module.nom}
              </option>
            ))}
          </select>
        </div>

        {/* Date */}
        <div>
          <label className="mb-2 block text-xs font-medium text-gray-500">
            Date proposée
          </label>

          <input
            type="date"
            name="date_rattrapage"
            value={formData.date_rattrapage}
            onChange={handleChange}
            className="w-full rounded-xl border border-gray-300 bg-white px-4 py-3 text-sm
                       outline-none transition
                       focus:border-green-500 focus:ring-2 focus:ring-green-100"
          />
        </div>

        {/* Heure */}
        <div>
          <label className="mb-2 block text-xs font-medium text-gray-500">
            Heure proposée
          </label>

          <input
            type="time"
            name="heure_rattrapage"
            value={formData.heure_rattrapage}
            onChange={handleChange}
            className="w-full rounded-xl border border-gray-300 bg-white px-4 py-3 text-sm
                       outline-none transition
                       focus:border-green-500 focus:ring-2 focus:ring-green-100"
          />
        </div>

      </div>
    </div>

    {/* Information */}
    <div className="mt-5 rounded-xl border border-blue-100 bg-blue-50 p-4">
      <div className="flex gap-3">
        <span className="text-blue-500">ℹ️</span>

        <p className="text-sm text-blue-700">
          Les modules concernés par votre absence doivent être
          remplacés ou faire l'objet d'une séance de rattrapage.
        </p>
      </div>
    </div>

  </div>
)}
          <div className="p-4 bg-slate-50 border border-dashed border-slate-300 rounded-xl">
            <label className="block text-sm font-medium text-slate-700 mb-1">
              Pièce jointe {formData.typeConge === "SICK" && <span className="text-rose-500">(Requis)</span>}
            </label>
            <input
              type="file"
              accept=".pdf, image/jpeg, image/png"
              onChange={handleFileChange}
              className="block w-full text-sm text-slate-500 file:mr-4 file:py-2 file:px-4 file:rounded-xl file:border-0 file:text-xs file:font-semibold file:bg-emerald-600 file:text-white hover:file:bg-emerald-700 cursor-pointer"
              required={formData.typeConge === "SICK"}
            />
          </div>

          <div className="flex justify-end">
            <button
              type="submit"
              className="rounded-xl bg-emerald-600 px-8 py-3.5 text-sm font-semibold text-white shadow-md hover:bg-emerald-700 transition"
            >
              Soumettre la demande
            </button>
          </div>
        </form>
      </div>

      {/* 3. Historique */}
      <div className="bg-white rounded-2xl border border-slate-200 shadow-sm p-6">
        <h3 className="text-lg font-bold text-slate-900 mb-4">Demandes récentes</h3>
        <div className="overflow-x-auto">
          <table className="w-full text-left border-collapse">
            <thead>
              <tr className="border-b border-slate-200 text-xs font-semibold text-slate-400 uppercase">
                <th className="py-3 px-4">Type</th>
                <th className="py-3 px-4">Début</th>
                <th className="py-3 px-4">Fin</th>
                <th className="py-3 px-4">Durée</th>
                <th className="py-3 px-4">Statut</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-100 text-sm">
              {submittedRequests.map((req) => (
                <tr key={req.id}>
                  <td className="py-3.5 px-4 font-semibold text-slate-800">{req.type}</td>
                  <td className="py-3.5 px-4 text-slate-600">{req.debut}</td>
                  <td className="py-3.5 px-4 text-slate-600">{req.fin}</td>
                  <td className="py-3.5 px-4 text-slate-600">{req.duree}</td>
                  <td className="py-3.5 px-4">
                    <span className={`inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium ${
                      req.statut === "EN_ATTENTE" 
                        ? "bg-amber-50 text-amber-700 border border-amber-200"
                        : "bg-emerald-50 text-emerald-700 border border-emerald-200"
                    }`}>
                      {req.statut === "EN_ATTENTE" ? "En attente" : "Validé"}
                    </span>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}