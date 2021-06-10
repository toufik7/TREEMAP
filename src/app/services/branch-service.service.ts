import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class BranchServiceService {

  constructor(private httpClient: HttpClient) { }

  getData(){
    return this.httpClient.get('http://localhost:8000/api/branches');
  }

  getBranchById(id){
    return this.httpClient.get('http://localhost:8000/api/branch/'+id);
  }
  getSubBranchesByBranchId(id1,id2){
    return this.httpClient.get('http://localhost:8000/api/arbre/'+id1+'/branch/'+id2+'/branches');
  }
  insertSubBranchByBranchId(id1,id2,data){
    return this.httpClient.post('http://localhost:8000/api/arbre/'+id1+'/branch/'+id2+'/addBranch',data);
  }
  inserBranchByArbreId(id, data){ // by arbre id
    return this.httpClient.post('http://localhost:8000/api/arbre/'+id+'/addBranch',data);
  }





  deleteData(id){
    return this.httpClient.delete('http://localhost:8000/api/deleteBranch/'+id);
  }












  getLeavesByBranchId(id1, id2){
    return this.httpClient.get('http://localhost:8000/api/arbre/'+id1+'/branch/'+id2+'/leaves');
  }
}
