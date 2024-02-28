import { Component } from '@angular/core';

@Component({
  selector: 'app-masterviewadmin',
  templateUrl: './masterviewadmin.component.html',
  styleUrls: ['./masterviewadmin.component.css']
})
export class MasterviewadminComponent {
  acc=localStorage.getItem('auth');
  logout(){
    localStorage.removeItem('auth');
    window.location.href="admin"
  }
}
