import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Arbre } from 'src/app/arbre';
import { ArbreServiceService } from 'src/app/services/arbre-service.service';

@Component({
  selector: 'app-create-new-arbre',
  templateUrl: './create-new-arbre.component.html',
  styleUrls: ['./create-new-arbre.component.css']
})
export class CreateNewArbreComponent implements OnInit {

  a: any;
  arbre = new Arbre();

  constructor(private arbreService: ArbreServiceService, private router:Router) { }

  ngOnInit(): void {
  }

  insertArbre(){
    this.arbreService.inserData(this.arbre).subscribe(
      res =>{
        this.a = res;
        //console.log();
        this.router.navigate(['arbre/'+ this.a.id+'/branches']);
      });
  }

}
