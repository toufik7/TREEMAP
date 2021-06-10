<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class Arbre extends Model
{
    protected $table = 'arbres';
    protected $fillable = ['title'];

    function branches(){
        return $this->hasMany(Branch::class);
    }
}
