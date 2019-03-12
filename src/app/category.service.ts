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
    this.obj = this.http.get('http://'+this.appvar.server+':'+this.appvar.port+'/categorygets')
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
    this.obj = this.http.post('http://'+this.appvar.server+':'+this.appvar.port+'/categorysave',obj)
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
    this.obj = this.http.post('http://'+this.appvar.server+':'+this.appvar.port+'/categoryupdate',obj)
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
