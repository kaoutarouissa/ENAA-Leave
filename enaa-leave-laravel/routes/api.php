 <?php
use App\Http\Controllers\AuthController;
use Illuminate\Support\Facades\Route;
use App\Http\Controllers\DemandeCongeController;
use App\Http\Controllers\SoldeCongeController;
use App\Http\Controllers\SolutionController;
use App\Http\Controllers\NotificationCongeController;

Route::post('/login', [AuthController::class, 'login']);

Route::middleware('auth:sanctum')->group(function () {
    Route::post('/logout', [AuthController::class, 'logout']);
    Route::get('/me', [AuthController::class, 'me']);
});

Route::middleware('auth:sanctum')->group(function () {

    Route::apiResource('demandes-conge', DemandeCongeController::class);

    Route::apiResource('soldes-conge', SoldeCongeController::class);

});
?>