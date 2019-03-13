import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { AppvarService } from './appvar.service';

@Injectable({
  providedIn: 'root'
})
export class CategoryService {
  obj: Observable<any>
  constructor(private http: HttpClient,private appvar: AppvarService) { }
  gets(callback){
    this.obj = this.http.get(this.appvar.serverport+'categorygets')
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
    this.obj = this.http.post(this.appvar.serverport+'categorysave',obj)
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
    this.obj = this.http.post(this.appvar.serverport+'categoryupdate',obj)
    this.obj.subscribe(
      data => {
        callback(data)
      },
      err => {
        callback(err)
      }
    )
  }
  getcapacities(obj,callback){
    this.obj = this.http.get(this.appvar.serverport+'getcapacities/'+obj.category_id+'/'+obj.servicename_id+'/'+obj.media_id+'')
    this.obj.subscribe(
      data => {
        callback(data)
      },
      err => {
        callback(err)
      }
    )
  }
  servicenamegetbycatgory(obj,callback){
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
  getprices(obj,callback){
    this.obj = this.http.get(this.appvar.serverport+'getprices/'+obj.category_id+'/'+obj.servicename_id+'/'+obj.media_id+'/'+obj.capacity)
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
