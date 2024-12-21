<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Relations\BelongsTo;
use Illuminate\Database\Eloquent\SoftDeletes;

class Appointment extends Model
{
    use SoftDeletes;

    protected $fillable = [
        'user_id',
        'start_date_time',
        'end_date_time',
        'status',
        'title'
    ];
//    protected function casts(): array
//    {
//        return [
//            'start_date_time' => 'datetime',
//            'end_date_time' => 'datetime',
//        ];
//    }

    public function user(): BelongsTo
    {
        return $this->belongsTo(User::class);
    }
}
