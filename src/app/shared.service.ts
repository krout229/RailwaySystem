import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map, Observable } from 'rxjs';
import { User } from './Components/signup/signup.model';
import { passenger } from './Models/passenger.model';
import { Seats } from './Models/seat.model';
import { Train } from './Models/train.model';

@Injectable({
  providedIn: 'root'
})
export class SharedService {
  public userServices:User;
  public TrainS:Train;
  public Seats:Seats;
  public Passenger:passenger;
  readonly APIUrl ="https://localhost:44379/api"
  constructor(private http:HttpClient ) { }

  SaveUser(val:any){
    console.log(val);
    return this.http.post<User>(this.APIUrl+'/User/SaveUser',val)
  }

  //Trains
  getAllTrains():Observable<Train>{
    return this.http.get<Train>(this.APIUrl+'/Train/GetAllTrains');
    
  }

  saveTrain(val:any){
    return this.http.post<Train>(this.APIUrl+'/Train/SaveTrain',val);
  }
  deleteTrain(id:number){
    return this.http.delete<Train>(this.APIUrl+'/Train/DeleteTrain?TrainId='+id);
  }
  updateTrain(data:any){
    return this.http.put<any>(this.APIUrl+'/Train/UpdateTrain',data);
  }
  SearchTrain(arr:any,dept:any,date:any){
    return this.http.get<Train>(this.APIUrl+'/Train/SearchTrainsSeat2?ArrivalStation='+arr+'&DepartureStation='+dept+'&date='+date);

  }
  GetSeatById(id:number){
    return this.http.get<Seats>(this.APIUrl+'/Seat/GetSeat?SeatId='+id);
  }

  getAllSeats():Observable<Seats>{
    return this.http.get<Seats>(this.APIUrl+'/Seat/GetAllSeats()');
    
  }
  updateSeats(id:number,data:any){
    return this.http.put<any>(this.APIUrl+'/Seat/UpdateSeat?SeatId='+id,data);

  }
 
  Login(formData: any){
    console.log(formData);
    return this.http.post<User>(this.APIUrl+'/User/login',formData)
  }
  GetUserbyEmail(email:any){
    return this.http.get<User>(this.APIUrl+'/User/GetUserbyEmail?Email=')
  }
  getAllUserDetails():Observable<any[]>{
    return this.http.get<any[]>(this.APIUrl+'/User/GetAllUser()')
    }
  getTrainbyId(id:number){
    return this.http.get<Train>(this.APIUrl+'/Train/GetTrain?TrainId='+id)
  }
  EmailService(name:any,reciever:any){
    // console.log(name);
    // console.log(reciever);
    return this.http.get<User>(this.APIUrl+'/User/EmailService?name='+name+'&reciever='+reciever);
  }


  //Passenger

  addPassenger(val:any){
    return this.http.post<passenger>(this.APIUrl+'/Passenger/AddPassenger',val);
  }


  //fare
  fareCal(tid:number,val:any,pid:number){
    return this.http.get<any>(this.APIUrl+'/Booking/CalculateFare?TrainId='+tid+'&Class='+val+'&PassengerId='+pid);
  }
}

