import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AppvarService {
  server
  port
  serverport
  sm = "pw.prayitno@gmail.com"
  constructor() {
    let productionServer = '192.168.0.117'
    let devServer = 'localhost'
    this.server = devServer
    this.port = '2219'
    this.serverport = 'http://'+this.server+':'+this.port+'/'
  }
}
