import React, { useState } from "react";

export default function Dashboardformateur() {
  const [formData, setFormData] = useState({
    typeConge: "PAID",
    dateDebut: "",
    dateFin: "",
    typeJournee: "FULL",
    motif: "",
    file: null,

    // Champs spécifiques au formateur
    remplacant_id: "",
    module_id: "",
    date_rattrapage: "",
    heure_rattrapage: "",
  });

  const [requests, setRequests] = useState([]);

  // Faux collègues pour le moment
  const [collegues] = useState([
    { id: 1, name: "Ahmed Alaoui" },
    { id: 2, name: "Sara Amrani" },
    { id: 3, name: "Youssef Benali" },
  ]);

  // Faux modules pour le moment
  const [modules] = useState([
    { id: 1, nom: "Développement Web" },
    { id: 2, nom: "Base de données" },
    { id: 3, nom: "JavaScript" },
  ]);

  // =========================
  // Gestion des champs
  // =========================
  const handleChange = (e) => {
    const { name, value } = e.target;

    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  // =========================
  // Gestion du fichier
  // =========================
  const handleFileChange = (e) => {
    setFormData((prev) => ({
      ...prev,
      file: e.target.files[0] || null,
    }));
  };

  // =========================
  // Soumission
  // =========================
  const handleSubmit = (e) => {
    e.preventDefault();

    // Vérification des dates
    if (!formData.dateDebut || !formData.dateFin) {
      alert("Veuillez sélectionner les dates de début et de fin.");
      return;
    }

    if (new Date(formData.dateFin) < new Date(formData.dateDebut)) {
      alert(
        "La date de fin ne peut pas être antérieure à la date de début."
      );
      return;
    }

    // Vérification formateur
    if (!formData.remplacant_id && !formData.date_rattrapage) {
      alert(
        "Veuillez sélectionner un collègue remplaçant ou proposer une date de rattrapage."
      );
      return;
    }

    // Nouvelle demande
    const newRequest = {
      id: Date.now(),
      typeConge: formData.typeConge,
      dateDebut: formData.dateDebut,
      dateFin: formData.dateFin,
      typeJournee: formData.typeJournee,
      motif: formData.motif,

      remplacant_id: formData.remplacant_id,
      module_id: formData.module_id,
      date_rattrapage: formData.date_rattrapage,
      heure_rattrapage: formData.heure_rattrapage,

      file: formData.file ? formData.file.name : null,

      status: "En attente",
    };

    setRequests((prev) => [newRequest, ...prev]);

    alert("Votre demande de congé a été envoyée avec succès.");

    // Reset
    setFormData({
      typeConge: "PAID",
      dateDebut: "",
      dateFin: "",
      typeJournee: "FULL",
      motif: "",
      file: null,

      remplacant_id: "",
      module_id: "",
      date_rattrapage: "",
      heure_rattrapage: "",
    });

    // Reset input file
    const fileInput = document.getElementById("file");
    if (fileInput) {
      fileInput.value = "";
    }
  };

  return (
    <div className="min-h-screen bg-slate-50 p-6">
      <div className="max-w-5xl mx-auto">
        {/* CARTES SOLDE */}
<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 mb-8">

  {/* Solde disponible */}
  <div className="bg-white border border-slate-200 rounded-2xl p-5 shadow-sm">
    <p className="text-sm text-slate-500">
      Solde disponible
    </p>

    <h2 className="text-3xl font-bold text-emerald-600 mt-2">
      18 jours
    </h2>

    <p className="text-xs text-slate-400 mt-1">
      Congés disponibles
    </p>
  </div>

  {/* Jours pris */}
  <div className="bg-white border border-slate-200 rounded-2xl p-5 shadow-sm">
    <p className="text-sm text-slate-500">
      Jours pris
    </p>

    <h2 className="text-3xl font-bold text-blue-600 mt-2">
      7 jours
    </h2>

    <p className="text-xs text-slate-400 mt-1">
      Congés déjà utilisés
    </p>
  </div>

  {/* Demandes en attente */}
  <div className="bg-white border border-slate-200 rounded-2xl p-5 shadow-sm">
    <p className="text-sm text-slate-500">
      En attente
    </p>

    <h2 className="text-3xl font-bold text-yellow-500 mt-2">
      2
    </h2>

    <p className="text-xs text-slate-400 mt-1">
      Demandes en cours
    </p>
  </div>

  {/* Jours restants */}
  <div className="bg-white border border-slate-200 rounded-2xl p-5 shadow-sm">
    <p className="text-sm text-slate-500">
      Jours restants
    </p>

    <h2 className="text-3xl font-bold text-purple-600 mt-2">
      11 jours
    </h2>

    <p className="text-xs text-slate-400 mt-1">
      Après les congés pris
    </p>
  </div>

</div>
        {/* =========================
            HEADER
        ========================= */}
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-slate-800">
            Demande de congé
          </h1>

          <p className="mt-2 text-slate-500">
            Remplissez le formulaire pour envoyer votre demande de congé.
          </p>
        </div>

        {/* =========================
            FORMULAIRE
        ========================= */}
        <form
          onSubmit={handleSubmit}
          className="bg-white rounded-2xl shadow-sm border border-slate-200 overflow-hidden"
        >

          {/* =========================
              INFORMATIONS CONGÉ
          ========================= */}
          <div className="p-6 border-b border-slate-200">

            <h2 className="text-lg font-semibold text-slate-800 mb-6">
              Informations du congé
            </h2>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">

              {/* Type congé */}
              <div>
                <label className="block text-sm font-medium text-slate-700 mb-2">
                  Type de congé
                </label>

                <select
                  name="typeConge"
                  value={formData.typeConge}
                  onChange={handleChange}
                  className="w-full rounded-xl border border-slate-300 px-4 py-3 outline-none focus:ring-2 focus:ring-emerald-500"
                >
                  <option value="PAID">Congé payé</option>
                  <option value="SICK">Congé maladie</option>
                  <option value="UNPAID">Congé sans solde</option>
                  <option value="ANNUAL">Congé annuel</option>
                </select>
              </div>

              {/* Type journée */}
              <div>
                <label className="block text-sm font-medium text-slate-700 mb-2">
                  Format de la journée
                </label>

                <select
                  name="typeJournee"
                  value={formData.typeJournee}
                  onChange={handleChange}
                  className="w-full rounded-xl border border-slate-300 px-4 py-3 outline-none focus:ring-2 focus:ring-emerald-500"
                >
                  <option value="FULL">Journée complète</option>
                  <option value="MORNING">Matin</option>
                  <option value="AFTERNOON">Après-midi</option>
                </select>
              </div>

              {/* Date début */}
              <div>
                <label className="block text-sm font-medium text-slate-700 mb-2">
                  Date de début
                </label>

                <input
                  type="date"
                  name="dateDebut"
                  value={formData.dateDebut}
                  onChange={handleChange}
                  required
                  className="w-full rounded-xl border border-slate-300 px-4 py-3 outline-none focus:ring-2 focus:ring-emerald-500"
                />
              </div>

              {/* Date fin */}
              <div>
                <label className="block text-sm font-medium text-slate-700 mb-2">
                  Date de fin
                </label>

                <input
                  type="date"
                  name="dateFin"
                  value={formData.dateFin}
                  onChange={handleChange}
                  required
                  className="w-full rounded-xl border border-slate-300 px-4 py-3 outline-none focus:ring-2 focus:ring-emerald-500"
                />
              </div>

            </div>

            {/* Motif */}
            <div className="mt-6">
              <label className="block text-sm font-medium text-slate-700 mb-2">
                Motif
              </label>

              <textarea
                name="motif"
                value={formData.motif}
                onChange={handleChange}
                rows="4"
                placeholder="Expliquez le motif de votre demande..."
                className="w-full rounded-xl border border-slate-300 px-4 py-3 outline-none resize-none focus:ring-2 focus:ring-emerald-500"
              />
            </div>

          </div>

          {/* =================================================
              PARTIE FORMATEUR
          ================================================= */}
          <div className="p-6 bg-emerald-50/50 border-b border-slate-200">

            <div className="mb-6">
              <h2 className="text-lg font-semibold text-slate-800">
                Organisation des cours
              </h2>

              <p className="text-sm text-slate-500 mt-1">
                En tant que formateur, veuillez prévoir le remplacement
                ou le rattrapage des cours concernés.
              </p>
            </div>

            <div className="space-y-6">

              {/* =========================
                  REMPLAÇANT
              ========================= */}
              <div>
                <label className="block text-sm font-medium text-slate-700 mb-2">
                  Collègue remplaçant
                </label>

                <select
                  name="remplacant_id"
                  value={formData.remplacant_id}
                  onChange={handleChange}
                  className="w-full rounded-xl border border-slate-300 bg-white px-4 py-3 outline-none focus:ring-2 focus:ring-emerald-500"
                >
                  <option value="">
                    -- Sélectionner un collègue --
                  </option>

                  {collegues.map((collegue) => (
                    <option
                      key={collegue.id}
                      value={collegue.id}
                    >
                      {collegue.name}
                    </option>
                  ))}
                </select>
              </div>

              {/* OU */}
              <div className="flex items-center gap-4">
                <div className="flex-1 h-px bg-slate-300"></div>

                <span className="text-sm font-semibold text-slate-500">
                  OU
                </span>

                <div className="flex-1 h-px bg-slate-300"></div>
              </div>

              {/* =========================
                  RATTRAPAGE
              ========================= */}
              <div className="bg-white rounded-xl border border-slate-200 p-5">

                <h3 className="font-semibold text-slate-800 mb-4">
                  Proposer une date de rattrapage
                </h3>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-4">

                  {/* Module */}
                  <div className="md:col-span-1">
                    <label className="block text-sm font-medium text-slate-700 mb-2">
                      Module concerné
                    </label>

                    <select
                      name="module_id"
                      value={formData.module_id}
                      onChange={handleChange}
                      className="w-full rounded-xl border border-slate-300 px-4 py-3 outline-none focus:ring-2 focus:ring-emerald-500"
                    >
                      <option value="">
                        -- Module --
                      </option>

                      {modules.map((module) => (
                        <option
                          key={module.id}
                          value={module.id}
                        >
                          {module.nom}
                        </option>
                      ))}
                    </select>
                  </div>

                  {/* Date rattrapage */}
                  <div>
                    <label className="block text-sm font-medium text-slate-700 mb-2">
                      Date
                    </label>

                    <input
                      type="date"
                      name="date_rattrapage"
                      value={formData.date_rattrapage}
                      onChange={handleChange}
                      className="w-full rounded-xl border border-slate-300 px-4 py-3 outline-none focus:ring-2 focus:ring-emerald-500"
                    />
                  </div>

                  {/* Heure */}
                  <div>
                    <label className="block text-sm font-medium text-slate-700 mb-2">
                      Heure
                    </label>

                    <input
                      type="time"
                      name="heure_rattrapage"
                      value={formData.heure_rattrapage}
                      onChange={handleChange}
                      className="w-full rounded-xl border border-slate-300 px-4 py-3 outline-none focus:ring-2 focus:ring-emerald-500"
                    />
                  </div>

                </div>

              </div>

              {/* Information */}
              <div className="flex gap-3 p-4 rounded-xl bg-emerald-100 border border-emerald-200">

                <div className="text-emerald-600 text-xl">
                  ℹ️
                </div>

                <div>
                  <p className="text-sm font-medium text-emerald-800">
                    Information
                  </p>

                  <p className="text-sm text-emerald-700 mt-1">
                    Vous devez soit sélectionner un collègue remplaçant,
                    soit proposer une date de rattrapage pour les cours
                    ou évaluations impactés par votre absence.
                  </p>
                </div>

              </div>

            </div>
          </div>

          {/* =================================================
              PIÈCE JOINTE
          ================================================= */}
          <div className="p-6 border-b border-slate-200">

            <div className="p-4 bg-slate-50 border border-dashed border-slate-300 rounded-xl">

              <label className="block text-sm font-medium text-slate-700 mb-2">
                Pièce jointe{" "}

                {formData.typeConge === "SICK" && (
                  <span className="text-rose-500">
                    (Requis)
                  </span>
                )}
              </label>

              <input
                id="file"
                type="file"
                accept=".pdf,image/jpeg,image/png"
                onChange={handleFileChange}
                required={formData.typeConge === "SICK"}
                className="w-full text-sm text-slate-600 file:mr-4 file:py-2 file:px-4 file:rounded-lg file:border-0 file:bg-emerald-100 file:text-emerald-700 hover:file:bg-emerald-200"
              />

              <p className="text-xs text-slate-400 mt-2">
                Formats acceptés : PDF, JPG, PNG.
              </p>

            </div>

          </div>

          {/* =================================================
              BOUTON
          ================================================= */}
          <div className="p-6 flex justify-end">

            <button
              type="submit"
              className="px-6 py-3 bg-emerald-600 hover:bg-emerald-700 text-white font-semibold rounded-xl transition"
            >
              Envoyer la demande
            </button>

          </div>

        </form>

        
{/* HISTORIQUE DES DEMANDES */}
<div className="mt-8">

  <h2 className="text-xl font-bold text-slate-800 mb-4">
    Historique de mes demandes
  </h2>

  {requests.length === 0 ? (

    <div className="bg-white border rounded-xl p-6 text-center">
      <p className="text-slate-500">
        Aucune demande envoyée.
      </p>
    </div>

  ) : (

    <div className="space-y-4">

      {requests.map((request) => (

        <div
          key={request.id}
          className="bg-white border border-slate-200 rounded-xl p-5 shadow-sm"
        >

          {/* Type et statut */}
          <div className="flex justify-between items-center mb-3">

            <h3 className="font-bold text-slate-800">
              {request.typeConge}
            </h3>

            <span className="bg-yellow-100 text-yellow-700 px-3 py-1 rounded-full text-sm">
              {request.status}
            </span>

          </div>

          {/* Dates */}
          <p className="text-sm text-slate-600">
            <strong>Du :</strong> {request.dateDebut}
          </p>

          <p className="text-sm text-slate-600">
            <strong>Au :</strong> {request.dateFin}
          </p>

          {/* Type journée */}
          <p className="text-sm text-slate-600 mt-2">
            <strong>Journée :</strong> {request.typeJournee}
          </p>

          {/* Motif */}
          {request.motif && (
            <p className="text-sm text-slate-600 mt-2">
              <strong>Motif :</strong> {request.motif}
            </p>
          )}

          {/* Remplaçant */}
          {request.remplacant_id && (
            <p className="text-sm text-slate-600 mt-2">
              <strong>Remplaçant :</strong>{" "}
              {collegues.find(
                (c) => c.id === Number(request.remplacant_id)
              )?.name}
            </p>
          )}

          {/* Rattrapage */}
          {request.date_rattrapage && (
            <p className="text-sm text-slate-600 mt-2">
              <strong>Rattrapage :</strong>{" "}
              {request.date_rattrapage}

              {request.heure_rattrapage &&
                ` à ${request.heure_rattrapage}`}
            </p>
          )}

          {/* Fichier */}
          {request.file && (
            <p className="text-sm text-slate-600 mt-2">
              <strong>Pièce jointe :</strong> {request.file}
            </p>
          )}

        </div>

      ))}

    </div>

  )}

</div>

        <div></div>

        

      </div>
    </div>
  );
}