import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { AppvarService } from './appvar.service';

@Injectable({
  providedIn: 'root'
})
export class ServiceService {
obj: Observable<any>
  constructor(private http: HttpClient,private appvar: AppvarService) {

  }
  getServices(callback){
    this.obj = this.http.get(this.appvar.serverport+'getservices')
    this.obj.subscribe(
      data => {
        callback(data)
      },err => {
        callback(err)
      }
    )
  }
  getSubServices(obj,callback){
    console.log("OBJ",obj)
    this.obj = this.http.get(this.appvar.serverport+'getsubservices/'+obj.service_id)
    this.obj.subscribe(
      data => {
        console.log("Data",data)
        callback(data)
      },err => {
        console.log("Err",err)
        callback(err)
      }
    )
  }
  getSubServicesLevel2(obj,callback){
    console.log("OBJ",obj)
    this.obj = this.http.get(this.appvar.serverport+'getsubserviceslevel2/'+obj.subservice_id)
    this.obj.subscribe(
      data => {
        console.log("Data",data)
        callback(data)
      },err => {
        console.log("Err",err)
        callback(err)
      }
    )
  }
}
