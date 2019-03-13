import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { AppvarService } from './appvar.service';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ServicenameService {
  obj : Observable<any>
  constructor(private http: HttpClient,private appvar: AppvarService) { }
  gets(callback){
    this.obj = this.http.get(this.appvar.serverport+'servicenamegets')
    this.obj.subscribe(
      data => {
        callback(data)
      },
      err => {
        callback(err)
      }
    )
  }
  getbycategory(obj,callback){
    this.obj = this.http.get(this.appvar.serverport+'servicenamegetbycatgory/'+obj.category_id)
    this.obj.subscribe(
      data => {
        callback(data)
      },
      err => {
        callback(err)
      }
    )
  }
  save(obj,callback){
    this.obj = this.http.post(this.appvar.serverport+'servicenamesave',obj)
    this.obj.subscribe(
      data => {
        callback(data)
      },
      err => {
        callback(err)
      }
    )
  }
  update(obj,callback){
    this.obj = this.http.post(this.appvar.serverport+'servicenameupdate',obj)
    this.obj.subscribe(
      data => {
        callback(data)
      },
      err => {
        callback(err)
      }
    )
  }

}
