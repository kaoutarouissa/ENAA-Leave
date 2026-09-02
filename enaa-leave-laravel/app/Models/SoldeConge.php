<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class SoldeConge extends Model
{
    //
    protected $fillable = ['user_id', 'type_conge', 'jours_disponibles', 'jours_pris', 'jours_restants',];
    public function user()
    {
        return $this->belongsTo(User::class, 'user_id');
    }
}
