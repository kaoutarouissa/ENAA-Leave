<?php

namespace App\Models;

use Illuminate\Foundation\Auth\User as Authenticatable;
use Laravel\Sanctum\HasApiTokens;

class Employe extends Authenticatable
{
    use HasApiTokens;

    protected $fillable = [
        'nom',
        'prenom',
        'email',
        'motpasse',
        'role',
    ];

    protected $hidden = [
        'motpasse',
        'remember_token',
    ];
}