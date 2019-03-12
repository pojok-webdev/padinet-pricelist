import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AppvarService {
  server
  port
  constructor() {
    this.server = 'localhost'
    this.port = '2219'
  }
}
