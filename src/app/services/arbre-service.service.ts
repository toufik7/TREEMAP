import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ArbreServiceService {

  constructor(private httpClient: HttpClient) { }

  getData(){
    return this.httpClient.get('http://localhost:8000/api/arbres');
  }
  getArbreById(id){
    return this.httpClient.get('http://localhost:8000/api/arbre/'+id);
  }

  inserData(data){
    return this.httpClient.post('http://localhost:8000/api/addArbre',data);
  }

  deleteData(id){
    return this.httpClient.delete('http://localhost:8000/api/deleteArbre/'+id);
  }

  getBranchesByArbreId(id){
    return this.httpClient.get('http://localhost:8000/api/arbre/'+id+'/branches');
  }

  updateData(id,data){
    return this.httpClient.put('http://localhost:8000/api/updateArbre/'+id,data);
  }
 /* export() {
    return this.httpClient.get("http://localhost:8000/api/arbres",
        {responseType: 'blob'});
  }*/
  export(id) {
    return this.httpClient.get("http://localhost:8000/api/store/"+id,{responseType: 'json'});
  }
}
