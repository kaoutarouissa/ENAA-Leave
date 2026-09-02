<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration
{
    /**
     * Run the migrations.
     */
    public function up(): void
    {
        Schema::create('demandes_conge', function (Blueprint $table) {
         $table->id();

         $table->foreignId('user_id')
        ->constrained('users')
        ->cascadeOnDelete();

         $table->date('date_debut');
         $table->date('date_fin');
         $table->dateTime('date_demande');

         $table->enum('status', [
        'en_attente',
        'approuvee',
        'refusee'
         ])->default('en_attente');

        $table->string('piece_jointe', 255)->nullable();
        $table->string('type_conge', 100);
        $table->string('motif', 255)->nullable();

        $table->timestamps();
});
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('demande_conges');
    }
};
