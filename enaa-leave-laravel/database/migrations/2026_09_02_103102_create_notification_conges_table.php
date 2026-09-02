<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration {
    /**
     * Run the migrations.
     */
    public function up(): void
    {
        Schema::create('notification_conges', function (Blueprint $table) {
            $table->id();
            $table->foreignId('demande_id')
                ->constrained('demandes_conge')
                ->cascadeOnDelete();

            $table->text('description');

            $table->dateTime('date_envoyee');

            $table->foreignId('employe_id')
                ->constrained('users')
                ->cascadeOnDelete();
            $table->timestamps();
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('notification_conges');
    }
};
