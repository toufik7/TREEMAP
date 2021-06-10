import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Branch } from 'src/app/branch';
import { ArbreServiceService } from 'src/app/services/arbre-service.service';
import { BranchServiceService } from 'src/app/services/branch-service.service';

@Component({

  selector: 'app-branche-list',
  templateUrl: './branche-list.component.html',
  styleUrls: ['./branche-list.component.css']
})
export class BrancheListComponent implements OnInit {
  imageonly:any;
  deleteicon:any;

  id:any;
  branches:any;
  branch = new Branch();
  constructor(private activatedRoute:ActivatedRoute,private router:Router,
    private arbreService: ArbreServiceService ,private branchService: BranchServiceService) {
            this.imageonly="imageonly";
            this.deleteicon="e-icon e-delete";

   }
  ngOnInit(): void {
    this.id = this.activatedRoute.snapshot.params.id;
    this.getBranchByArbreId();
  }

  getBranchByArbreId(){
    this.arbreService.getBranchesByArbreId(this.id).subscribe(
      res =>{
        this.branches = res;
      });
  }

  insertBranch(){
    this.branchService.inserBranchByArbreId(this.id, this.branch).subscribe(
      res =>{
        this.getBranchByArbreId();
        this.branch.title='';
      });
  }

  deleteBranch(id){
    this.branchService.deleteData(id).subscribe(
      res =>{
        this.getBranchByArbreId();
      }
    )
  }

}
