<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class Solution extends Model
{
    //
    public function demandeConge()
    {
        return $this->belongsTo(DemandeConge::class, 'demande_id');
    }

    
    public function remplacant()
    {
        return $this->belongsTo(User::class, 'remplacant_id');
    }
}
