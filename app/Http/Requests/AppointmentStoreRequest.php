<?php

namespace App\Http\Requests;

use Illuminate\Foundation\Http\FormRequest;


class AppointmentStoreRequest extends FormRequest
{

    public function rules(): array
    {
        return [
            'start_date_time' => ['required', 'date'],
            'end_date_time' => ['required', 'date', 'after:start_date_time'],
            'title' => ['required', 'string'],
        ];
    }
}
