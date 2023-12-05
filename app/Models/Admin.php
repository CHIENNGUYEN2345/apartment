<?php

/**
 * Admin Model
 *
 * Admin Model manages Admin operation.
 *
 * @category   Admin
 * @package    vRent
 * @author     Techvillage Dev Team
 * @copyright  2017 Techvillage
 * @license
 * @version    1.3
 * @link       http://techvill.net
 * @since      Version 1.3
 * @deprecated None
 */

namespace App\Models;

use App\Http\Helpers\CommonHelper;
use DB;
use Illuminate\Auth\Authenticatable;
use Illuminate\Auth\Passwords\CanResetPassword;
use Illuminate\Contracts\Auth\Authenticatable as AuthenticatableContract;
use Illuminate\Contracts\Auth\CanResetPassword as CanResetPasswordContract;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\SoftDeletes;

class Admin extends Model implements AuthenticatableContract, CanResetPasswordContract
{
    use Authenticatable, CanResetPassword;
    use SoftDeletes;

    protected $table = 'admin';

    protected $fillable = [
        'name', 'email', 'password', 'address', 'tel', 'image', 'gender', 'birthday', 'api_token', 'password_md5', 'fb_id', 'role_id'
    ];

    protected $hidden = ['password', 'remember_token'];

    public function roles()
    {
        return $this->belongsToMany(Roles::class, 'role_admin', 'admin_id', 'role_id');
    }

    public function recharges()
    {
        return $this->hasMany(Recharges::class, 'admin_id', 'id');
    }

    public function admin_log()
    {
        return $this->hasMany(Website::class, 'admin_id', 'id');
    }

    public function generateToken()
    {
        $this->api_token = str_random(60) . time();
        $this->save();

        return $this->api_token;
    }
}
