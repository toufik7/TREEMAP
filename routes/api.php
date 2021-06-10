<?php

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;

/*
|--------------------------------------------------------------------------
| API Routes
|--------------------------------------------------------------------------
|
| Here is where you can register API routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| is assigned the "api" middleware group. Enjoy building your API!
|
*/

Route::middleware('auth:api')->get('/user', function (Request $request) {
    return $request->user();
});

// Get all arbres
Route::get('arbres','arbreController@getArbres');

// Get specific arbre
Route::get('arbre/{id}','arbreController@getArbreById');

// add new arbre
Route::Post('addArbre','arbreController@addArbre');

// Update arbre
Route::Put('updateArbre/{id}','arbreController@updateArbre');

//Delete arbre
Route::Delete('deleteArbre/{id}','arbreController@deleteArbre');

//download
Route::get('store/{id}','arbreController@store');


//-------------------------------------------------------------------------------------------------------
// Get all branches
Route::get('branches','branchController@getBranches');
// Get specific branch
Route::get('branch/{id}','branchController@getBranchById');




// ----------------------------advenced branches Routes!!-----------------------------------------
// Get branches specific to arbre
Route::get('arbre/{id}/branches','branchController@getBranchesByArbreId');
//get sub branches by branch id
Route::get('arbre/{id1}/branch/{id2}/branches','branchController@getSubBranchesByBranchId');

// add new subbranch by main branch ID
Route::Post('arbre/{id1}/branch/{id2}/addBranch','branchController@addSubBranchByBranchId');
// add new branch by arbre ID
Route::Post('arbre/{id}/addBranch','branchController@addBranchByArbreId');



// Update branch
Route::Put('updateBranch/{id}','branchController@updateBranch');

//Delete branch
Route::Delete('deleteBranch/{id}','branchController@deleteBranch');
