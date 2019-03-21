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
    private appvar: AppvarService,
  ) {}
  doLogin(obj,callback){
    this.obj = this.http.post(this.appvar.serverport+'usercheckpassword',obj)
    this.obj.subscribe(
      data => {
        console.log("Email to store",data)
        localStorage.setItem("email",data.obj.email)
        localStorage.setItem("hash",data.obj.hash)
        localStorage.setItem("password",obj.password)
        localStorage.setItem("role",obj.role)
        localStorage.setItem("roleabbr",obj.roleabbr)
        callback(data)
      },
      err => {
        callback(err)
      }
    )
  }
  doLogout(obj,callback){
  localStorage.clear()
  callback({message:'You have logged out'})
/*    this.obj = this.http.post(this.appvar.serverport+'logout',obj)
    this.obj.subscribe(
      data => {
        localStorage.clear()
        callback(data)
      },
      err => {
        callback(err)
      }
    )*/
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
  isLogin(callback){
    let _email = localStorage.getItem("email")
    if(_email === null){
      callback(false)
    }
    else
    {
      callback ({
        email:localStorage.getItem('email'),
        hash:localStorage.getItem('hash'),
        password:localStorage.getItem('password'),
        role:localStorage.getItem('role'),
        roleabbr:localStorage.getItem('roleabbr')
      })
    }
  }

}
