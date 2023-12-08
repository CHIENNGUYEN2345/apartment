<?php

namespace App\CRMDV\Models;

use App\Models\Admin;
use Illuminate\Database\Eloquent\Model;

class Codes extends Model
{

    protected $table = 'codes';

    public function bill() {
        return $this->belongsTo(Bill::class, 'bill_id', 'id');
    }

    public function service() {
        return $this->belongsTo(Service::class, 'service_id', 'id');
    }
}
