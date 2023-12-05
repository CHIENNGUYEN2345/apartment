<?php

namespace App\CRMBDS\Models;

use Illuminate\Database\Eloquent\Model;

use App\Models\Admin;

class Company extends Model
{

    protected $table = 'company_profile';

    protected $fillable = [
        'id', 'bill_ids', 'admin_id', 'start_date', 'end_date', 'lecturers_id', 'tutors_id', 'name', 'note'
    ];

    public function bill() {
        return $this->belongsTo(Bill::class, 'bill_id');
    }

    public function lecturers() {
        return $this->belongsTo(Admin::class, 'lecturers_id');
    }

    public function tutors() {
        return $this->belongsTo(Admin::class, 'tutors_id');
    }

    public function service() {
        return $this->belongsTo(Service::class, 'service_id');
    }
}
