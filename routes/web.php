<?php

use App\Http\Controllers\AppointmentController;
use App\Http\Controllers\ProfileController;
use Illuminate\Foundation\Application;
use Illuminate\Support\Facades\Route;
use Inertia\Inertia;

Route::get('/', function () {
    return Inertia::render('Welcome', [
        'canLogin' => Route::has('login'),
        'canRegister' => Route::has('register'),
        'laravelVersion' => Application::VERSION,
        'phpVersion' => PHP_VERSION,
    ]);
});

Route::get('/dashboard', function () {
    return Inertia::render('Dashboard');
})->middleware(['auth', 'verified'])->name('dashboard');

Route::middleware('auth')->group(function () {
    Route::get('/profile', [ProfileController::class, 'edit'])->name('profile.edit');
    Route::patch('/profile', [ProfileController::class, 'update'])->name('profile.update');
    Route::delete('/profile', [ProfileController::class, 'destroy'])->name('profile.destroy');

    Route::prefix('appointment')->group(function () {
        Route::get('/', [AppointmentController::class, 'index'])->name('appointment.index');
        Route::get('/create',[AppointmentController::class, 'create'])->name('appointment.create');
        Route::patch('/{appointment}/cancel',[AppointmentController::class, 'cancel'])->name('appointment.cancel');
        Route::post('/',[AppointmentController::class, 'store'])->name('appointment.store');
    });

});

require __DIR__.'/auth.php';
