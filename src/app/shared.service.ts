import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map, Observable } from 'rxjs';
import { User } from './Components/signup/signup.model';
import { Seats } from './Models/seat.model';
import { Train } from './Models/train.model';

@Injectable({
  providedIn: 'root'
})
export class SharedService {
  public userServices:User;
  public TrainS:Train;
  public Seats:Seats[];
  readonly APIUrl ="https://localhost:44379/api"
  constructor(private http:HttpClient ) { }

  SaveUser(val:any){
    console.log(val);
    return this.http.post<User>(this.APIUrl+'/User/SaveUser',val)
  }

  //Trains
  getAllTrains():Observable<Train>{
    return this.http.get<Train>(this.APIUrl+'/Train/GetAllTrains')
    
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
    return this.http.get<Seats[]>(this.APIUrl+'/Seat/GetSeat?SeatId='+id);
  }
 
}
