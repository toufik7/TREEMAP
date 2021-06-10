<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Arbre;
use App\Branch;
use App\Services\GitHub;


class arbreController extends Controller
{
    public function getArbres(){
        // return in json format , 200 : success
        return response()->json(Arbre::all(), 200);
    }

    public function getArbreById($id){
        // 404 not found
        $arbre = Arbre::find($id);
        if(is_null($arbre)){
            return response()->json(['message'=>'Arbre Not Found'],404);
        }
        return response()->json($arbre::find($id),200);
    }

    public function addArbre(Request $request){
        // 201 creation success
        $arbre = Arbre::create($request->all());
        return response()->json($arbre,201);
    }

    public function updateArbre(Request $request ,$id){
        $arbre = Arbre::find($id);
        if(is_null($arbre)){
            return response()->json(['message'=>'Arbre Not Found'],404);
        }
        $arbre->update($request->all());
        return response()->json($arbre,200);
    }

    public function deleteArbre($id){
        $arbre = Arbre::find($id);
        if(is_null($arbre)){
            return response()->json(['message'=>'Arbre Not Found'],404);
        }
        $arbre->delete();
        return response()->json(null,204);
    }







//------------------------------------------ affichage file.txt---------------------------------------
    public static function writeFile($content,$branches,$lvl){
        //$content .= PHP_EOL."///          ";
        $content .= PHP_EOL."";
        foreach($branches as $b){
            //$content .= PHP_EOL."lvl : ".$lvl;
            $content .= PHP_EOL."";
            $space="     ";
            for($i=0;$i<$lvl;$i++){
                $space .= $space;
            }
            $content .= $space;
            $content .= $b->title;
            $subBranches = Branch::select('*')
            ->where('mainBranch_id', '=', $b->id)
            ->get();
            if(isset($subBranches) && count($subBranches) > 0){
               // $content .= PHP_EOL."there is ".count($subBranches)."  sub branches          ";

                $content = self::writeFile($content,$subBranches,$lvl+1);

            } else{
                //$content .= PHP_EOL."no sub branches         ";
                $content .= PHP_EOL."";
            }
        }return $content;

    }

    public function store($id) {
        $arbre = Arbre::find($id); // get Arbre to download
        $content = $arbre->title; //write arbre title
        $content .= PHP_EOL."";
        //$branches =  $arbre->branches;
        $branches = Branch::select('*')
        ->where('arbre_id', '=', $id)
        ->where('mainBranch_id', '=', null)
        ->get();


       /* foreach($branches as $b){  // first branches
            $content .= PHP_EOL."     ";
            $content .= $b->title;
            $subBranches = Branch::select('*')
            ->where('mainBranch_id', '=', $b->id)
            ->get();

            foreach($subBranches as $sb){  // sub branches
                $content .= PHP_EOL."          ";
                $content .= $sb->title;
                $sub = Branch::select('*')
                ->where('mainBranch_id', '=', $sb->id)
                ->get();

                foreach($sub as $ssb){  // sub branches
                    $content .= PHP_EOL."               ";
                    $content .= $ssb->title;
                    $subBranchsssubes = Branch::select('*')
                    ->where('mainBranch_id', '=', $ssb->id)
                    ->get();
                }
            }
        }*/
     $content = $this->writeFile($content, $branches,0); // sub_branches all have Main Branch


        // file name that will be used in the download
        $fileName = "Arbres.txt";

        // use headers in order to generate the download
        $headers = [
          'Content-type' => 'text/plain',
          'Accept'=> 'application/txt',
          'Content-Disposition' => sprintf('attachment; filename="%s"', $fileName)
          //'Content-Length' => strlen($content)
        ];

        // make a response, with the content, a 200 response code and the headers
        //return Response::make($content, 200, $headers);

         $jsonresponse = response()->json($content,200,$headers);
         return $jsonresponse;
        /* return response()->streamDownload(function () {
            echo response()->json(null,200);
        }, $fileName);*/

        }

}
