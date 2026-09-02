<?php

namespace App\Services;

use Carbon\Carbon;

class LeaveCalculatorService
{
    public function calculateDays($dateDebut, $dateFin)
    {
        $debut = Carbon::parse($dateDebut);
        $fin = Carbon::parse($dateFin);

        $nombreJours = 0;

        while ($debut->lte($fin)) {
            if ($debut->isWeekday()) {
                $nombreJours++;
            }

            $debut->addDay();
        }

        return $nombreJours;
    }
}