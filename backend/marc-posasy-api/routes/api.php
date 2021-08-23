<?php

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;
use App\Http\Controllers\AuthController;
use App\Http\Controllers\UserController;
use App\Http\Controllers\SaleController;

/*
|--------------------------------------------------------------------------
| API Routes
|--------------------------------------------------------------------------
|
| Here is where you can register API routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| is assigned the "api" middleware group. Enjoy building your API!
|
*/

Route::middleware('auth:api')->get('/user', function (Request $request) {
    return $request->user();
});

Route::post('/auth/login', [AuthController::class, 'login']);

Route::group(['middleware' => ['jwt.auth']], function() {
    Route::get('/user/list', [UserController::class, 'list']);
    Route::post('/user/add', [UserController::class, 'add']);

    Route::get('/sale/list', [SaleController::class, 'list']);
    Route::post('/sale/add', [SaleController::class, 'add']);
    Route::put('/sale/update', [SaleController::class, 'update']);
    Route::delete('/sale/delete/{id}', [SaleController::class, 'delete']);
    Route::delete('/sale/restore/{id}', [SaleController::class, 'restore']);
});
