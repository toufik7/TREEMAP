<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Branch;
use App\Arbre;

class branchController extends Controller
{
    public function getBranches(){
        // return in json format , 200 : success
        return response()->json(Branch::all(), 200);
    }

    public function getBranchById($id){
        // 404 not found
        $branch = Branch::find($id);
        if(is_null($branch)){
            return response()->json(['message'=>'Branch Not Found'],404);
        }
        return response()->json($branch::find($id),200);
    }

    public function addBranch(Request $request){
        // 201 creation success
        $branch = Branch::create($request->all());
        return response()->json($branch,201);
    }

    public function updateBranch(Request $request ,$id){
        $branch = Branch::find($id);
        if(is_null($branch)){
            return response()->json(['message'=>'Branch Not Found'],404);
        }
        $branch->update($request->all());
        return response()->json($branch,200);
    }

    public function deleteBranch($id){
        $branch = Branch::find($id);
        if(is_null($branch)){
            return response()->json(['message'=>'Brnanch Not Found'],404);
        }
        $branch->delete();
        return response()->json(null,204);
    }

    public function getBranchesByArbreId($id){
        $arbre = Arbre::find($id);
        if(is_null($arbre)){
            return response()->json(['message'=>'Arbre Not Found'],404);
        }
        //$allbranches =  $arbre->branches;
        $branches = Branch::select('*')
        ->where('arbre_id', '=', $id)
        ->where('mainBranch_id', '=', null)
        ->get();
        return response()->json($branches,200);

    }

    public function addBranchByArbreId($id,Request $request){
        $arbre = Arbre::find($id);
        if(is_null($arbre)){
            return response()->json(['message'=>'Arbre Not Found'],404);
        }
        // 201 creation success
        request()->merge([ 'arbre_id' => $id ]);

        $branch = Branch::create($request->all());
        return response()->json($branch,201);
    }

    //circular branch has many sub branches of type branch
    public function addSubBranchByBranchId($id1,$id2,Request $request){
        $branch = Branch::find($id2);
        if(is_null($branch)){
            return response()->json(['message'=>'Main Branch Not Found'],404);
        }
        // 201 creation success
        request()->merge([ 'arbre_id' => $id1 ]);
        request()->merge([ 'mainBranch_id' => $id2 ]);
        $branch = Branch::create($request->all());
        return response()->json($branch,201);
    }
    public function getSubBranchesByBranchId($id1,$id2){
        $branch = Branch::find($id2);
        if(is_null($branch)){
            return response()->json(['message'=>'Main Branch Not Found'],404);
        }
        $branches = Branch::select('*')
        ->where('arbre_id', '=', $id1)
        ->where('mainBranch_id', '=', $id2)
        ->get();
        //$branches =  $branch->subBranches;
        return response()->json($branches,200);

    }
}
