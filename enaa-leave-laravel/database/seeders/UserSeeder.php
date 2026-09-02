<?php

namespace Database\Seeders;

use App\Models\User;
use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\Hash;

class UserSeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {
        //
        User::create([
            'name' => 'Ahmed',
            'email' => 'employe@enaa.ma',
            'password' => Hash::make('password123'),
            'role' => 'employe',
        ]);

        User::create([
            'name' => 'Ali',
            'email' => 'manager@enaa.ma',
            'password' => Hash::make('password123'),
            'role' => 'manager',
        ]);

        User::create([
            'name' => 'Fatima',
            'email' => 'rh@enaa.ma',
            'password' => Hash::make('password123'),
            'role' => 'rh',
        ]);
        User::create([
            'name' => 'Fatima',
            'email' => 'formateur@enaa.ma',
            'password' => Hash::make('password123'),
            'role' => 'formateur',
        ]);
    }
}
