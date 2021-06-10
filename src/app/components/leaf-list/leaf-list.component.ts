import { analyzeAndValidateNgModules, ThisReceiver } from '@angular/compiler';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Branch } from 'src/app/branch';
import { BranchServiceService } from 'src/app/services/branch-service.service';

@Component({
  selector: 'app-leaf-list',
  templateUrl: './leaf-list.component.html',
  styleUrls: ['./leaf-list.component.css']
})
export class LeafListComponent implements OnInit {

  idparent:any ;
  id1:any;
  id2:any;
  data:any;
  branches:any;
  branch = new Branch();
  constructor(private activatedRoute:ActivatedRoute,private router:Router
    ,private branchService: BranchServiceService) { }

  ngOnInit(): void {
    this.id1 = this.activatedRoute.snapshot.params.id1;
    this.id2 = this.activatedRoute.snapshot.params.id2;
    console.log("id1 : "+ this.id1);
    console.log("id2 : "+ this.id2);

    this.getSubBranchByBranchId();
  }

  getBranchById(){
    this.branchService.getBranchById(this.id2).subscribe(
      res =>{
        this.data = res
        this.branch = this.data;
        this.idparent = this.branch.mainBranch_id;
        console.log("branch id : "+ this.id2);
        console.log(" Main branch id :" + this.idparent);

      });
  }
  goto(id2){
    this.id2 = id2;
    this.router.navigate(['/arbre/'+this.id1+'/branch/'+this.id2+'/branches']);
    this.getSubBranchByBranchId();
    //console.log("id1 : "+ this.id1);
    //console.log("id2 : "+ this.id2);
  }

  backtoMainBranch(){
    this.branchService.getBranchById(this.id2).subscribe(
      res =>{
        this.data = res
        this.branch = this.data;
        this.idparent = this.branch.mainBranch_id;
        console.log("branch id : "+ this.id2);
        console.log(" Main branch id :" + this.idparent);
        this.id2 = this.idparent

        if(this.idparent==null){
          console.log("navigating to branches cz id parent is null ");
          return this.router.navigate(['/arbre/'+this.id1+'/branches']);
        }
        this.router.navigate(['/arbre/'+this.id1+'/branch/'+this.idparent+'/branches']);
        this.getSubBranchByBranchId();

      });
  }

  getSubBranchByBranchId(){
    this.branchService.getSubBranchesByBranchId(this.id1,this.id2).subscribe(
      res =>{
        this.branches = res;
      });
  }
  insertSubBranchByBranchId(){
    this.branchService.insertSubBranchByBranchId(this.id1,this.id2,this.branch).subscribe(
      res =>{
        this.getSubBranchByBranchId();
        this.branch.title='';
      });
  }

  deleteBranch(id){
    this.branchService.deleteData(id).subscribe(
      res =>{
        this.getSubBranchByBranchId();
      });
    }

  /*getLeafByBranchId(){
    this.branchService.getLeavesByBranchId(this.id1,this.id2).subscribe(
      res =>{
        this.leaves = res;
      });
  }

  insertLeaf(){
    this.leafService.insertLeafByBranchId(this.id1,this.id2, this.leaf).subscribe(
      res =>{
        this.getLeafByBranchId();
      });
  }

  deleteLeaf(id){
    this.leafService.deleteData(id).subscribe(
      res =>{
        this.getLeafByBranchId();
      }
    )
  }*/

}
