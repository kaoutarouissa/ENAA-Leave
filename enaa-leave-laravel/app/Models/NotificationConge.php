<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class NotificationConge extends Model
{
    //
    public function employe()
    {
        return $this->belongsTo(User::class, 'user_id');
    }

    public function demandeConge()
    {
        return $this->belongsTo(DemandeConge::class, 'demande_id');
    }
}
