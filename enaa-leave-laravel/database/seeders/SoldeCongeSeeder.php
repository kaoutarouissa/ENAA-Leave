<?php

namespace Database\Seeders;

use App\Models\SoldeConge;
use App\Models\User;
use Illuminate\Database\Seeder;

class SoldeCongeSeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {
        $balancesByRole = [
            'employe' => [
                ['type_conge' => 'PAID', 'jours_disponibles' => 22, 'jours_pris' => 4, 'jours_restants' => 18],
                ['type_conge' => 'SICK', 'jours_disponibles' => 10, 'jours_pris' => 2, 'jours_restants' => 8],
                ['type_conge' => 'AUTHORIZATION', 'jours_disponibles' => 4.5, 'jours_pris' => 0, 'jours_restants' => 4.5],
            ],
            'manager' => [
                ['type_conge' => 'PAID', 'jours_disponibles' => 25, 'jours_pris' => 3, 'jours_restants' => 22],
                ['type_conge' => 'SICK', 'jours_disponibles' => 12, 'jours_pris' => 1, 'jours_restants' => 11],
                ['type_conge' => 'AUTHORIZATION', 'jours_disponibles' => 6, 'jours_pris' => 0, 'jours_restants' => 6],
            ],
            'rh' => [
                ['type_conge' => 'PAID', 'jours_disponibles' => 25, 'jours_pris' => 5, 'jours_restants' => 20],
                ['type_conge' => 'SICK', 'jours_disponibles' => 12, 'jours_pris' => 2, 'jours_restants' => 10],
                ['type_conge' => 'AUTHORIZATION', 'jours_disponibles' => 6, 'jours_pris' => 1, 'jours_restants' => 5],
            ],
            'formateur' => [
                ['type_conge' => 'PAID', 'jours_disponibles' => 20, 'jours_pris' => 2, 'jours_restants' => 18],
                ['type_conge' => 'SICK', 'jours_disponibles' => 8, 'jours_pris' => 0, 'jours_restants' => 8],
                ['type_conge' => 'AUTHORIZATION', 'jours_disponibles' => 4, 'jours_pris' => 0, 'jours_restants' => 4],
            ],
        ];

        $emails = [
            'employe@enaa.ma',
            'manager@enaa.ma',
            'rh@enaa.ma',
            'formateur@enaa.ma',
        ];

        foreach ($emails as $email) {
            $user = User::where('email', $email)->first();

            if (! $user) {
                continue;
            }

            $rows = $balancesByRole[$user->role] ?? $balancesByRole['employe'];

            foreach ($rows as $row) {
                SoldeConge::updateOrCreate(
                    [
                        'user_id' => $user->id,
                        'type_conge' => $row['type_conge'],
                    ],
                    [
                        'jours_disponibles' => $row['jours_disponibles'],
                        'jours_pris' => $row['jours_pris'],
                        'jours_restants' => $row['jours_restants'],
                    ]
                );
            }
        }
    }
}