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
    this.obj = this.http.get<any>(this.appvar.serverport+'pricelistgets')
    this.obj.subscribe(
      data => {
        console.log("Pricelists Data",data)
        callback(data)
      },
      err => {
        console.log("Err",err)
        callback(err)
      }
    )
  }
  getcapacities(obj,callback){
    this.obj = this.http
    .get<any>(this.appvar.serverport+'getcapacities/'+obj.category_id+'/'+obj.service_id+'/'+obj.subservice_id+'/'+obj.media_id)
    this.obj.subscribe(
      data => {
        console.log("Capacity Data",data)
        callback(data)
      },
      err => {
        console.log("Err",err)
        callback(err)
      }
    )
  }
  getPrices(obj,callback){
    this.obj = this.http
    .post<any>(this.appvar.serverport+'getprices',obj)
    this.obj.subscribe(
      data => {
        console.log("Prices Data",data)
        callback(data)
      },
      err => {
        console.log("Err",err)
        callback(err)
      }
    )
  }
  getMedias(obj,callback){
    this.obj = this.http
    .get<any>(this.appvar.serverport+'pricelistgetmedia/'+obj.category_id+'/'+obj.service_id+'/'+obj.subservice_id)
    this.obj.subscribe(
      data => {
        console.log("Prices Media",data)
        callback(data)
      },
      err => {
        console.log("Err",err)
        callback(err)
      }
    )
  }
  
  save(obj,callback){
    this.obj = this.http.post<any>(this.appvar.serverport+'pricelistsave',obj)
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
    this.obj = this.http.post<any>(this.appvar.serverport+'pricelistupdate',obj)
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
    this.obj = this.http.post<any>(this.appvar.serverport+'pricelistremove',obj)
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
