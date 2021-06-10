<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class Branch extends Model
{
    protected $table = 'branches';
    protected $fillable = ['title','arbre_id','mainBranch_id'];

    function arbre(){
        return $this->belongsTo(Arbre::class);
    }
    function subBranches(){
        return $this->hasMany(Branch::class,'mainBranch_id','id');
    }
}
