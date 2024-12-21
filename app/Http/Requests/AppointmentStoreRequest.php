<?php

namespace App\Http\Requests;

use Illuminate\Foundation\Http\FormRequest;


class AppointmentStoreRequest extends FormRequest
{

    public function rules(): array
    {
        return [
            'date' => ['required', 'date', 'date_format:Y-m-d'],
            'stat_time' => ['required', 'date_format:H:i'],
            'end_time' => ['required', 'date_format:H:i', 'after:stat_time'],
        ];
    }
}
