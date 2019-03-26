import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { AppvarService } from './appvar.service';

@Injectable({
  providedIn: 'root'
})
export class PromoService {
  obj: Observable<any>
  constructor(
    private http: HttpClient,
    private appvar: AppvarService
  ) { }
  save(obj,callback){
    console.log("save obj",obj)
    this.obj = this.http.post<any>(this.appvar.serverport+'promosave',obj)
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
    this.obj = this.http.post<any>(this.appvar.serverport+'promoupdate',obj)
    this.obj.subscribe(
      data => {
        callback(data)
      },
      err => {
        callback(err)
      }
    )
  }
  remove(obj,callback){
    this.obj = this.http.get<any>(this.appvar.serverport+'promoremove/'+obj.id)
    this.obj.subscribe(
      data => {
        callback(data)
      },
      err => {
        callback(err)
      }
    )
  }
  gets(callback){
    this.obj = this.http.get<any>(this.appvar.serverport+'promogets')
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
