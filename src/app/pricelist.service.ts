import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'
import { Observable } from 'rxjs';
import { AppvarService } from './appvar.service';

@Injectable({
  providedIn: 'root'
})
export class PricelistService {
  obj:Observable<any>
  constructor(
    private http: HttpClient,
    private appvar: AppvarService
  ) { }
  gets(callback){
    this.obj = this.http.get<any>('http://'+this.appvar.server+':'+this.appvar.port+'/pricelistgets')
    this.obj.subscribe(
      data => {
        console.log("Data",data)
        callback(data)
      },
      err => {
        console.log("Err",err)
        callback(err)
      }
    )
  }
  getcapacities(obj,callback){
    this.obj = this.http.get<any>('http://'+this.appvar.server+':'+this.appvar.port+'/getcapacities/'+obj.category_id+'/'+obj.servicename_id+'/'+obj.media_id)
    this.obj.subscribe(
      data => {
        console.log("Data",data)
        callback(data)
      },
      err => {
        console.log("Err",err)
        callback(err)
      }
    )
  }
  save(obj,callback){
    this.obj = this.http.post<any>('http://'+this.appvar.server+':'+this.appvar.port+'/pricelistsave',obj)
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
    this.obj = this.http.post<any>('http://'+this.appvar.server+':'+this.appvar.port+'/pricelistupdate',obj)
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
    this.obj = this.http.post<any>('http://'+this.appvar.server+':'+this.appvar.port+'/pricelistremove',obj)
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
