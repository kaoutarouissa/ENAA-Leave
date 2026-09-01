import React from "react";
import { Link } from "react-router-dom";
import { 
  Calendar, 
  CheckCircle2, 
  Clock, 
  ShieldCheck, 
  ArrowRight, 
  UserCheck 
} from "lucide-react";

export default function Intro() {
  return (
    <div className="min-h-screen bg-slate-50/50 text-slate-800 antialiased selection:bg-emerald-500 selection:text-white">
      {/* Dynamic Background */}
      <div className="absolute inset-0 -z-10 overflow-hidden">
        <div className="absolute -top-40 left-1/2 -translate-x-1/2 blur-3xl opacity-30 w-[800px] h-[400px] bg-gradient-to-tr from-emerald-400 to-teal-200 rounded-full" />
      </div>

      {/* Navbar */}
      <header className="sticky top-0 z-50 backdrop-blur-md bg-white/75 border-b border-slate-100">
        <nav className="max-w-7xl mx-auto flex items-center justify-between px-6 py-4">
          <div className="flex items-center gap-3">
          
            <span className="text-xl font-bold tracking-tight text-slate-900">
              ENNA <span className="text-emerald-600">Leave</span>
            </span>
          </div>

          <div className="flex items-center gap-4">
            <Link
              to="/login"
              className="text-sm font-semibold text-slate-600 hover:text-slate-900 hover:bg-emerald-600 hover:rounded-2xl transition px-3 py-2"
            >
              Se connecter
            </Link>
          
          </div>
        </nav>
      </header>

      {/* Hero Section */}
      <section className="pt-16 pb-20 px-6 max-w-7xl mx-auto">
        <div className="max-w-3xl mx-auto text-center">
          
          {/* Badge */}
          <div className="inline-flex items-center gap-2 rounded-full bg-emerald-50 border border-emerald-200/60 px-4 py-1.5 text-xs font-semibold text-emerald-700 shadow-sm mb-6">
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
            </span>
            <p className="text-[#c5316c]">
            Gestion des congés & absences 2.0</p>
          </div>

          {/* Title */}
          <h1 className="text-4xl font-extrabold tracking-tight text-slate-900 sm:text-6xl leading-[1.15]">
            Gérez vos congés <br />
            <span className="bg-gradient-to-r from-emerald-600 to-teal-500 bg-clip-text text-transparent">
              simplement et efficacement
            </span>
          </h1>

          {/* Subtitle */}
          <p className="mt-6 text-lg leading-relaxed text-slate-600 max-w-2xl mx-auto font-normal">
            Une plateforme moderne et intuitive pour simplifier les demandes, 
            automatiser le suivi et accélérer les validations au sein de votre entreprise.
          </p>

          {/* CTA Group */}
          <div className="mt-8 flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link
              to="/login"
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 rounded-xl bg-emerald-600 px-7 py-3.5 text-base font-semibold text-white shadow-lg shadow-emerald-600/25 hover:bg-emerald-700 transition-all duration-200 active:scale-95"
            >
              Commencer maintenant
              <ArrowRight className="w-5 h-5" />
            </Link>
          </div>

          {/* Micro Trust badges */}
          <div className="mt-10 flex flex-wrap justify-center items-center gap-6 text-xs text-slate-500 font-medium">
            <span className="flex items-center gap-1.5">
              <CheckCircle2 className="w-4 h-4 text-emerald-500" /> <p className=" text-[#c5316c]">Validation en 1 clic </p>
            </span>
            <span className="flex items-center gap-1.5">
              <CheckCircle2 className="w-4 h-4 text-emerald-500" />  <p className=" text-[#c5316c]">Solde actualisé en direct</p>
            </span>
            <span className="flex items-center gap-1.5">
              <CheckCircle2 className="w-4 h-4 text-emerald-500" /> <p className=" text-[#c5316c]"> Interface 100% sécurisée</p>
            </span>
          </div>

        </div>

        {/* Mockup Preview Card */}
        <div className="mt-14 max-w-4xl mx-auto rounded-2xl bg-white p-3 shadow-2xl ring-1 ring-slate-200/60">
          <div className="rounded-xl bg-slate-900 p-6 text-white min-h-[300px] flex flex-col justify-between relative overflow-hidden">
            <div className="flex justify-between items-center border-b border-slate-800 pb-4">
              <div className="flex gap-2">
                <div className="w-3 h-3 rounded-full bg-red-500/80" />
                <div className="w-3 h-3 rounded-full bg-yellow-500/80" />
                <div className="w-3 h-3 rounded-full bg-green-500/80" />
              </div>
              <span className="text-xs font-mono text-slate-400">tableau-de-bord.ennaleave.app</span>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 my-6">
              <div className="bg-slate-800/60 p-4 rounded-lg border border-slate-700/50">
                <Calendar className="w-5 h-5 text-emerald-400 mb-2" />
                <p className="text-xs text-slate-400">Solde Congés Payés</p>
                <p className="text-xl font-bold text-white mt-1">18 Jours</p>
              </div>
              <div className="bg-slate-800/60 p-4 rounded-lg border border-slate-700/50">
                <Clock className="w-5 h-5 text-teal-400 mb-2" />
                <p className="text-xs text-slate-400">Demandes en attente</p>
                <p className="text-xl font-bold text-white mt-1">1 Demande</p>
              </div>
              <div className="bg-slate-800/60 p-4 rounded-lg border border-slate-700/50">
                <UserCheck className="w-5 h-5 text-emerald-400 mb-2" />
                <p className="text-xs text-slate-400">RTT Disponibles</p>
                <p className="text-xl font-bold text-white mt-1">5 Jours</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-slate-200 py-6 text-center text-xs text-slate-400">
        © 2026 ENNA Leave — Gestion des congés. Tous droits réservés.
      </footer>
    </div>
  );
}