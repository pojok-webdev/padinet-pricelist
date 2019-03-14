import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { AppvarService } from './appvar.service';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  obj: Observable<any>
  constructor(
    private http: HttpClient,
    private appvar:AppvarService
  ) {}
  doLogin(obj,callback){
    this.obj = this.http.post(this.appvar.serverport+'usercheckpassword',obj)
    this.obj.subscribe(
      data => {
        callback(data)
      },
      err => {
        callback(err)
      }
    )
  }
  doLogout(obj,callback){
    this.obj = this.http.post(this.appvar.serverport+'logout',obj)
    this.obj.subscribe(
      data => {
        callback(data)
      },
      err => {
        callback(err)
      }
    )
  }
  changePassword(obj,callback){
    this.obj = this.http.post(this.appvar.serverport+'userchangepassword',obj)
    this.obj.subscribe(
      data => {
        callback(data)
      },
      err => {
        callback(err)
      }
    )
  }
  createUser(obj,callback){
    this.obj = this.http.post(this.appvar.serverport+'createuser',obj)
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
    console.log("user gets invoked")
    this.obj = this.http.get(this.appvar.serverport+'usergets')
    this.obj.subscribe(
      data => {
        console.log("Success",data)
        callback(data)
      },
      err => {
        console.log("Error",err)
        callback(err)
      }
    )
  }
  updateUser(obj,callback){
    this.obj = this.http.post(this.appvar.serverport+'updateuser',obj)
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
