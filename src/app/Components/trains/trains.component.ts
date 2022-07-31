import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControlName, FormGroup } from '@angular/forms';
import { Seats } from 'src/app/Models/seat.model';
import { Train } from 'src/app/Models/train.model';
import { SharedService } from 'src/app/shared.service';
import { FooterService } from 'src/app/SharedService/footer.service';
import { NavbarService } from 'src/app/SharedService/navbar.service';

@Component({
  selector: 'app-trains',
  templateUrl: './trains.component.html',
  styleUrls: ['./trains.component.css']
})
export class TrainsComponent implements OnInit {
formValue!:FormGroup;
trainModelObj:Train=new Train()
trainData!:any;
seats !: Seats[];
seatData!:any;
  constructor(private fb:FormBuilder,private shared:SharedService,private nav:NavbarService,private fs:FooterService) { }

  ngOnInit(): void {
   
    this.nav.show();
    this.nav.doSomethingElseUseful();
    this.fs.show();
    this.fs.doSomethingElseUseful();
    this.formValue=this.fb.group({
      ArrivalStation:[''],
      DepartureStation:[''],
      Date: ['']
    })
  }
SearchTrain(){
// // this.trainModelObj.arrivalStation=this.formValue.value.ArrivalStation;
// // this.trainModelObj.departureStation=this.formValue.value.DepartureStation;
// // this.trainModelObj.arrivalDate=this.formValue.value.Date;
this.shared.SearchTrain(this.formValue.value.ArrivalStation,this.formValue.value.DepartureStation,this.formValue.value.Date).subscribe(res=>{
 
 
  console.log(res);
    this.trainData = res;
    this.seatData=res;
    this.formValue.reset();
   
 
},error=>{
  alert("No Train Found");
});
}


}