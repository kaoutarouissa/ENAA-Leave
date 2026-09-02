<?php

namespace App\Http\Controllers;
use App\Services\LeaveCalculatorService;
use Illuminate\Http\Request;
use App\Models\DemandeConge;
class DemandeCongeController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index()
    {
        //
        $demandes = DemandeConge::with([
            'employe',
            'solutions',
            'notifications'
        ])->get();

        return response()->json($demandes);
    }

    /**
     * Store a newly created resource in storage.
     */
public function store(Request $request, LeaveCalculatorService $calculator)
{
    $validated = $request->validate([
        'date_debut' => 'required|date',
        'date_fin' => 'required|date|after_or_equal:date_debut',
        'type_conge' => 'required|string|max:100',
        'motif' => 'nullable|string|max:255',
        'piece_jointe' => 'nullable|string|max:255',
        'format_journee' => 'required|in:complete,matin,apres_midi',
    ]);

    // Calcul des jours demandés
    $nombreJours = $calculator->calculateDays(
        $request->date_debut,
        $request->date_fin
    );

    // Récupérer le solde de l'utilisateur
    $solde = \App\Models\SoldeConge::where('user_id', auth()->id())
        ->where('type_conge', $request->type_conge)
        ->first();

    // Vérifier le solde
    if (!$solde || $solde->jours_restants < $nombreJours) {
        return response()->json([
            'message' => 'Solde de congé insuffisant'
        ], 400);
    }

    $validated['user_id'] = auth()->id();
    $validated['date_demande'] = now();
    $validated['status'] = 'en_attente';

    $demande = DemandeConge::create($validated);

    return response()->json([
        'message' => 'Demande de congé créée avec succès',
        'nombre_jours' => $nombreJours,
        'demande' => $demande
    ], 201);
}

    /**
     * Display the specified resource.
     */
    public function show(DemandeConge $demandeConge)
    {
        //
        return response()->json(
            $demandeConge->load([
                'employe',
                'solution',
                'notifications'
            ])
        );
    }

    /**
     * Update the specified resource in storage.
     */
    public function update(Request $request, DemandeConge $demandeConge)
    {
        //
         $validated = $request->validate([
            'status' => 'required|in:en_attente,approuvee,refusee',
        ]);

        $demandeConge->update($validated);

        return response()->json([
            'message' => 'Demande mise à jour',
            'demande' => $demandeConge
        ]);
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy(DemandeConge $demandeConge)
    {
        //
         $demandeConge->delete();

        return response()->json([
            'message' => 'Demande supprimée'
        ]);
    }
}
