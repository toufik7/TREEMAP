import { Component, OnInit } from '@angular/core';
import { Arbre } from 'src/app/arbre';
import { ArbreServiceService } from 'src/app/services/arbre-service.service';
import { saveAs } from 'file-saver';
import * as FileSaver from 'file-saver';
import { DomSanitizer } from '@angular/platform-browser';
import 'rxjs/Rx' ;

@Component({
  selector: 'app-arbre-list',
  templateUrl: './arbre-list.component.html',
  styleUrls: ['./arbre-list.component.css']
})
export class ArbreListComponent implements OnInit {


  fileUrl;

  data:any;
  arbres:any;
  arbre = new Arbre();

  constructor(private sanitizer: DomSanitizer, private arbreService: ArbreServiceService) { }

  ngOnInit(): void {
    this.getArbresData();
  }

  getArbresData(){
    this.arbreService.getData().subscribe(
      res =>{
        this.arbres = res;
      });
  }

  deleteArbre(id){
    this.arbreService.deleteData(id).subscribe(
      res =>{
        this.getArbresData();
      }
    )
  }

  downloadtest(id, title){
    this.arbreService.export(id).subscribe(
      res =>{
        console.log(res);
        this.data = res;
        this.download(title,this.data);
      });

  }
  download(title,d){
    const data = d;
    const blob = new Blob([data], { type: 'text/plain;charset=utf-8' });
    FileSaver.saveAs(blob,title);
   /* const url= window.URL.createObjectURL(blob);
    window.open(url);
    window.URL.revokeObjectURL(url);
    console.log(url);
    this.fileUrl = this.sanitizer.bypassSecurityTrustResourceUrl(url);
    URL.revokeObjectURL( url );*/


    /*let file = new File([data], "fileName", {type: "application/json"});
        let exportUrl = URL.createObjectURL(file);
        window.location.assign(exportUrl);
        URL.revokeObjectURL(exportUrl);*/

  }
}
