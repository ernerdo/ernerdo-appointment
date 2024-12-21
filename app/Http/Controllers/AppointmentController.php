<?php

namespace App\Http\Controllers;

use App\Http\Requests\AppointmentStoreRequest;
use App\Models\Appointment;
use Illuminate\Support\Facades\Redirect;
use Inertia\Inertia;
use Carbon\Carbon;

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
        $appointments = Appointment::where('status', 'reserved')->get();
        $mapAppointments = $appointments->map(function ($appointment) {
            return [
                'id' => $appointment->id,
                'title' => $appointment->title,
                'start' => $appointment->start_date_time,
                'end' => $appointment->end_date_time
            ];
        });

        return Inertia::render('Appointment/Create',[
            'appointments' => $mapAppointments
        ]);
    }

    /**
     *Store appointment
     */
    public function store(AppointmentStoreRequest $request)
    {

        $validated = $request->validated();

//        if (!$this->isAvailable($validated)) {
//            return redirect()->back()
//                ->withErrors(['error' => 'test'])
//                ->with('error', 'test');
//        }
        Appointment::create([
            'title' => $validated['title'],
            'user_id' => auth()->user()->id,
            'start_date_time' => Carbon::create($validated['start_date_time'])->format('Y-m-d H:i:s'),
            'end_date_time' => Carbon::create($validated['end_date_time'])->format('Y-m-d H:i:s'),
        ]);

        return Redirect::route('appointment.index');
    }

    /**
     * Cancel appointnment
     */
    public function cancel(Appointment $appointment)
    {
        $appointment->update(['status' => 'cancelled']);

    }


    public function isAvailable($appointmentToVerify)
    {
        return false;
//        $appointments = Appointment::where('status','reserved')->get();

    }
}
