import React, { useState, useEffect } from "react";
import { createDemandeConge, getDemandesConge } from "../../service/api";
import {getSoldes} from "../../service/LeaveService";
export default function Dashboard() {
  // Formulaire
  const [demande, setDemande] = useState({
    type_conge: "PAID",
    date_debut: "",
    date_fin: "",
    motif: "",
    piece_jointe: null,
    format_journee: "complete",
  });

  // Historique
  const [demandes, setDemandes] = useState([]);
  const [loading, setLoading] = useState(true);
  const [soldeConge, setSoldeConge] = useState([]);
  const congePaye = soldeConge.find(
  (solde) => solde.type_conge === "PAID"
);
// =========================
// RÉCUPÉRER LES DEMANDES
// =========================
useEffect(() => {
  chargerDemandes();
}, []);

const chargerDemandes = async () => {
  try {
      const data = await getDemandesConge();
      setDemandes(data);
    } catch (error) {
      console.error("Erreur :", error);
    } finally {
      setLoading(false);
    }
  };

  // RECUPERER SOLDE
  useEffect(() => {
    chargerSoldeConge();
  }, []);

  const chargerSoldeConge = async () => {
    try {
      const data = await getSoldes();
      setSoldeConge(data);
    } catch (error) {
      console.log("Erreur : ", error);
    } finally {
      setLoading(false);
    }
  };
  // =========================
  // CHANGEMENT DES CHAMPS
  // =========================
  const onChange = (e) => {
    setDemande({
      ...demande,
      [e.target.name]: e.target.value,
    });
  };
  
  const congeMaladie = soldeConge.find(
    (solde) => solde.type_conge === "SICK"
  );
  // =========================
  // FICHIER
  // =========================
  const handleFileChange = (e) => {
    setDemande({
      ...demande,
      piece_jointe: e.target.files[0]?.name || null,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const data = await createDemandeConge(demande);

    if (data.demande) {
      alert("Demande envoyée avec succès !");

      setDemande({
        type_conge: "PAID",
        date_debut: "",
        date_fin: "",
        motif: "",
        piece_jointe: null,
        format_journee: "complete",
      });

      chargerDemandes();
    } else {
      alert("Erreur lors de l'envoi");
    }
  };

  return (
    <div className="space-y-8 w-full max-w-7xl mx-auto p-4 sm:p-6">
      {/* =========================
          HEADER
      ========================= */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 border-b border-slate-200 pb-5">
        <div>
          <h1 className="text-2xl font-bold text-slate-900">Tableau de bord</h1>

          <p className="text-sm text-slate-500 mt-1">
            Consultez vos soldes et effectuez une nouvelle demande.
          </p>
        </div>

        <div className="inline-flex items-center gap-2 rounded-xl bg-emerald-50 border border-emerald-200 px-4 py-2 text-xs font-semibold text-emerald-700">
          <span className="h-2 w-2 rounded-full bg-emerald-500"></span>
          Compte Actif — Année 2026
        </div>
      </div>

      {/* =========================
          CARTES
      ========================= */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {/* Congés payés */}
        <div className="bg-white p-6 rounded-2xl border border-slate-200 shadow-sm">
          <span className="text-xs font-semibold uppercase tracking-wider text-slate-400">
            Solde Annuel
          </span>

          <h3 className="text-lg font-bold text-slate-800 mt-1">
            Congés Payés
          </h3>

          <div className="flex items-baseline gap-2 mt-4">
            <span className="text-3xl font-extrabold text-slate-900">{congePaye?.jours_restants ?? 0}</span>

            <span className="text-sm text-slate-500">/ {congePaye?.jours_disponibles ?? 0}  Jours</span>
          </div>

          
        </div>

        {/* Maladie */}
        <div className="bg-white p-6 rounded-2xl border border-slate-200 shadow-sm">
          <span className="text-xs font-semibold uppercase tracking-wider text-slate-400">
            Incapacité
          </span>

          <h3 className="text-lg font-bold text-slate-800 mt-1">
            Congés Maladie
          </h3>

          <div className="flex items-baseline gap-2 mt-4">
            <span className="text-3xl font-extrabold text-slate-900">2</span>

            <span className="text-sm text-slate-500">Jours pris</span>
          </div>
        </div>

        {/* Autorisation */}
        <div className="bg-white p-6 rounded-2xl border border-slate-200 shadow-sm">
          <span className="text-xs font-semibold uppercase tracking-wider text-slate-400">
            Permissions
          </span>

          <h3 className="text-lg font-bold text-slate-800 mt-1">
            Autorisations d'absence
          </h3>

          <div className="flex items-baseline gap-2 mt-4">
            <span className="text-3xl font-extrabold text-slate-900">4.5</span>

            <span className="text-sm text-slate-500">Heures</span>
          </div>
        </div>
      </div>

      {/* =========================
          FORMULAIRE
      ========================= */}
      <div className="bg-white rounded-2xl border border-slate-200 shadow-sm p-6 sm:p-8">
        <h2 className="text-xl font-bold text-slate-900 mb-6 border-b border-slate-100 pb-4">
          Nouvelle Demande
        </h2>

        <form onSubmit={handleSubmit} className="space-y-6">
          {/* Type */}
          <div>
            <label className="block text-sm font-medium text-slate-700 mb-2">
              Type de congé *
            </label>

            <select
              name="type_conge"
              value={demande.type_conge}
              onChange={onChange}
              required
              className="w-full rounded-xl border border-slate-300 px-4 py-3 outline-none"
            >
              <option value="PAID">Congé Payé</option>

              <option value="SICK">Congé Maladie</option>

              <option value="AUTHORIZATION">Autorisation d'absence</option>
            </select>
          </div>

          {/* Format de la journée */}
          <div>
            <label className="block text-sm font-medium text-slate-700 mb-2">
              Format de la journée *
            </label>

            <select
              name="format_journee"
              value={demande.format_journee}
              onChange={onChange}
              required
              className="w-full rounded-xl border border-slate-300 px-4 py-3 outline-none"
            >
              <option value="">Choisir</option>
              <option value="complete">Journée complète</option>
              <option value="matin">Matin</option>
              <option value="apres_midi">Après-midi</option>
            </select>
          </div>

          {/* Dates */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <label className="block text-sm font-medium text-slate-700 mb-2">
                Date de début *
              </label>

              <input
                type="date"
                name="date_debut"
                value={demande.date_debut}
                onChange={onChange}
                required
                className="w-full rounded-xl border border-slate-300 px-4 py-3 outline-none"
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-slate-700 mb-2">
                Date de fin *
              </label>

              <input
                type="date"
                name="date_fin"
                value={demande.date_fin}
                onChange={onChange}
                required
                className="w-full rounded-xl border border-slate-300 px-4 py-3 outline-none"
              />
            </div>
          </div>

          {/* Motif */}
          <div>
            <label className="block text-sm font-medium text-slate-700 mb-2">
              Motif
            </label>

            <textarea
              name="motif"
              value={demande.motif}
              onChange={onChange}
              rows="4"
              placeholder="Raison de votre absence..."
              className="w-full rounded-xl border border-slate-300 px-4 py-3 outline-none"
            ></textarea>
          </div>

          {/* Pièce jointe */}
          <div className="p-4 bg-slate-50 border border-dashed border-slate-300 rounded-xl">
            <label className="block text-sm font-medium text-slate-700 mb-2">
              Pièce jointe
            </label>

            <input
              type="file"
              accept=".pdf,.jpg,.jpeg,.png"
              onChange={handleFileChange}
              className="block w-full text-sm"
            />
          </div>

          {/* Bouton */}
          <div className="flex justify-end">
            <button
              type="submit"
              className="rounded-xl bg-emerald-600 px-8 py-3.5 text-sm font-semibold text-white hover:bg-emerald-700"
            >
              Soumettre la demande
            </button>
          </div>
        </form>
      </div>

      {/* =========================
          HISTORIQUE
      ========================= */}
      <div className="bg-white rounded-2xl border border-slate-200 shadow-sm p-6">
        <h3 className="text-lg font-bold text-slate-900 mb-4">
          Historique des demandes
        </h3>

        {loading ? (
          <p className="text-sm text-slate-500">Chargement...</p>
        ) : demandes.length === 0 ? (
          <p className="text-sm text-slate-500">Aucune demande de congé.</p>
        ) : (
          <div className="overflow-x-auto">
            <table className="w-full text-left">
              <thead>
                <tr className="border-b text-xs text-slate-400 uppercase">
                  <th className="py-3 px-4">Type</th>

                  <th className="py-3 px-4">Début</th>

                  <th className="py-3 px-4">Fin</th>

                  <th className="py-3 px-4">Motif</th>

                  <th className="py-3 px-4">Statut</th>
                </tr>
              </thead>

              <tbody>
                {demandes.map((demandeItem) => (
                  <tr
                    key={demandeItem.id}
                    className="border-b border-slate-100"
                  >
                    <td className="py-4 px-4 font-semibold">
                      {demandeItem.type_conge}
                    </td>

                    <td className="py-4 px-4 text-slate-600">
                      {demandeItem.date_debut}
                    </td>

                    <td className="py-4 px-4 text-slate-600">
                      {demandeItem.date_fin}
                    </td>

                    <td className="py-4 px-4 text-slate-600">
                      {demandeItem.motif || "-"}
                    </td>

                    <td className="py-4 px-4">
                      <span className="px-3 py-1 rounded-full text-xs bg-amber-50 text-amber-700">
                        {demandeItem.status}
                      </span>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        )}
      </div>
    </div>
  );
}
