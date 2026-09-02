<?php

namespace App\Http\Controllers;

use App\Models\SoldeConge;
use Illuminate\Http\Request;

class SoldeCongeController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index()
    {
        //
        $soldes = SoldeConge::where('user_id', auth()->id())->get();
        return response()->json($soldes);
    }

    /**
     * Store a newly created resource in storage.
     */

    //
    public function store(Request $request)
    {
        $validated = $request->validate([
            'user_id' => 'required|exists:users,id',
            'type_conge' => 'required|string',
            'jours_disponibles' => 'required|integer|min:0',
        ]);

        $validated['jours_pris'] = 0;
        $validated['jours_restants'] = $validated['jours_disponibles'];

        $solde = SoldeConge::create($validated);

        return response()->json([
            'message' => 'Solde créé avec succès',
            'solde' => $solde
        ], 201);
    }


    /**
     * Display the specified resource.
     */
    public function show(string $id)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     */
    public function update(Request $request, string $id)
    {
        //
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy(string $id)
    {
        //
    }
}
