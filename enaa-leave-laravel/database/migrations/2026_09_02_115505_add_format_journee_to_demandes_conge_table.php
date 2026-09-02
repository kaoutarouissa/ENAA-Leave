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
        Schema::table('demandes_conge', function (Blueprint $table) {
            //
            $table->enum('format_journee', [
            'complete',
            'matin',
            'apres_midi'
        ]);
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::table('demandes_conge', function (Blueprint $table) {
            //
        });
    }
};
