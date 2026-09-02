<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class DemandeConge extends Model
{
    //
    protected $fillable = [
    'user_id',
    'type_conge',
    'date_debut',
    'date_fin',
    'date_demande',
    'motif',
    'statuts',
    'piece_jointe'
];
     protected $table = 'demandes_conge';
    public function employe()
    {
        return $this->belongsTo(User::class, 'user_id');
    }

    public function solutions()
    {
        return $this->hasMany(Solution::class, 'demande_id');
    }

    public function notifications()
    {
        return $this->hasMany(NotificationConge::class, 'demande_id');
    }
}
