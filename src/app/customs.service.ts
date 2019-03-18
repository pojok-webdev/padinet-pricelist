import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { AppvarService } from './appvar.service';

@Injectable({
  providedIn: 'root'
})
export class CustomsService {
private obj:Observable<any>
  constructor(private http: HttpClient,private appvar: AppvarService) { }
  save(obj,callback){
    this.obj = this.http.post<any>(this.appvar.serverport+'customsave',obj)
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
    this.obj = this.http.get<any>(this.appvar.serverport+'customgets')
    this.obj.subscribe(
      data => {
        callback(data)
      },
      err => {
        callback(err)
      }
    )
  }
  getByMonth(obj,callback){
    this.obj = this.http.get<any>(this.appvar.serverport+'getbymonth/'+obj.monthyear)
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
