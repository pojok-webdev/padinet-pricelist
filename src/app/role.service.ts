import { Injectable } from '@angular/core';
import { AppComponent } from './app.component';

@Injectable({
  providedIn: 'root'
})
export class RoleService {

  constructor(
    private appComponent: AppComponent
  ) { }

}
