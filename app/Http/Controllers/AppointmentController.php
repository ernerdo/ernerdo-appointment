<?php

namespace App\Http\Controllers;

use App\Http\Requests\AppointmentStoreRequest;
use App\Models\Appointment;
use Illuminate\Support\Facades\Redirect;
use Inertia\Inertia;

class AppointmentController extends Controller
{
    public function index()
    {
        $user = auth()->user();
        $appointments = $user->activeAppointments;
        return Inertia::render('Appointment/Index', [
            'appointments' => $appointments
        ]);
    }

    /**
     * Page for create appointment
     */

    public function create()
    {
        return Inertia::render('Appointment/Create');
    }

    /**
     *Store appointment
     */
    public function store(AppointmentStoreRequest $request)
    {

        $validated = $request->validated();
        $appointment = Appointment::create([
            'user_id' => auth()->user()->id,
            'date' => $request->date,
            'time' => $request->time,
        ]);

        return Redirect::route('appointments.index');
    }

    /**
     * Cancel appointnment
     */
    public function cancel(Appointment $appointment)
    {
        $appointment->update(['status' => 'cancelled']);

    }
}
