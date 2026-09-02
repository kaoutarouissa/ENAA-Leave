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

    Route::post('/demandes-conge', [DemandeCongeController::class,'store']);
    Route::get('/demandes-conge', [DemandeCongeController::class,'index']);
    Route::post('/soldes-conges', [SoldeCongeController::class, 'store']);
    Route::get('/soldes-conges', [SoldeCongeController::class, 'index']);

});
?>