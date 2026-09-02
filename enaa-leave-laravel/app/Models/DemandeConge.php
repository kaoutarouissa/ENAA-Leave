<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class DemandeConge extends Model
{
    //
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
