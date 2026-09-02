<?php

namespace App\Http\Controllers;

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
            'solution',
            'notifications'
        ])->get();

        return response()->json($demandes);
    }

    /**
     * Store a newly created resource in storage.
     */
    public function store(Request $request)
    {
        //
        $validated = $request->validate([
            'date_debut' => 'required|date',
            'date_fin' => 'required|date|after_or_equal:date_debut',
            'type_conge' => 'required|string|max:100',
            'motif' => 'nullable|string|max:255',
            'piece_jointe' => 'nullable|string|max:255',
        ]);

        $validated['employe_id'] = auth()->id();
        $validated['date_demande'] = now();
        $validated['status'] = 'en_attente';

        $demande = DemandeConge::create($validated);

        return response()->json([
            'message' => 'Demande de congé créée avec succès',
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
