import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PricelistService {
  obj:Observable<any>
  constructor(private http: HttpClient) { }
  gets(callback){
    this.obj = this.http.get<any>('http://localhost:2219/gets')
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
    this.obj = this.http.post<any>('http://localhost:2219/save',obj)
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
    this.obj = this.http.post<any>('http://localhost:2219/update',obj)
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
    this.obj = this.http.post<any>('http://localhost:2219/remove',obj)
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
