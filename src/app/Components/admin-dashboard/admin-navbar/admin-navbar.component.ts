import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { SharedService } from 'src/app/shared.service';
import { NavbarService } from 'src/app/SharedService/navbar.service';

@Component({
  selector: 'app-admin-navbar',
  templateUrl: './admin-navbar.component.html',
  styleUrls: ['./admin-navbar.component.css']
})
export class AdminNavbarComponent implements OnInit {
  userDetails!:any;
  constructor(private router:Router,private shared:SharedService) { }

  ngOnInit(): void {
    this.shared.getUserProfile().subscribe(
      res=>{
       this.userDetails=res;
       console.log(this.userDetails);
      },
      err =>{
       console.log(err);
      },
    );
  }
  onLogout() {
    localStorage.removeItem('token');
    this.router.navigate(['/login']);
  }
}
