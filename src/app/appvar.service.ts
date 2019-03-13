import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AppvarService {
  server
  port
  serverport
  constructor() {
    this.server = 'localhost'
    this.port = '2219'
    this.serverport = 'http://'+this.server+':'+this.port+'/'
  }
}
