import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Arbre } from 'src/app/arbre';
import { ArbreServiceService } from 'src/app/services/arbre-service.service';

@Component({
  selector: 'app-arbre-edit',
  templateUrl: './arbre-edit.component.html',
  styleUrls: ['./arbre-edit.component.css']
})
export class ArbreEditComponent implements OnInit {
  id:any;
  data: any;
  arbre = new Arbre();
  constructor(private activatedRoute:ActivatedRoute,private router:Router, private arbreService:ArbreServiceService) { }

  ngOnInit(): void {
    this.id = this.activatedRoute.snapshot.params.id;
    this.getData();
  }

  getData(){
    this.arbreService.getArbreById(this.id).subscribe(
      res=>{
        this.data = res;
        this.arbre = this.data;
      }
    )
  }

  updateArbre(){
    this.arbreService.updateData(this.id,this.arbre).subscribe(
      res=>{
        this.router.navigate(['']);
      }
    )
  }

}
