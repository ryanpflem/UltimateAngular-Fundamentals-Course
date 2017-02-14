import { Injectable } from '@angular/core';
import { Http, Response, Headers, RequestOptions } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map'
import { Passenger } from './models/passenger.interface';

const PASSENGER_API: string = '/api/passengers';

@Injectable()
export class PassengerDashboardService {
  constructor(private http: Http) {}

  getPassengers(): Observable<Passenger[]> {
    return this.http
      .get(PASSENGER_API)
      .map((res: Response) => res.json());
  }

  updatePassengers(passenger: Passenger): Observable<Passenger> {
    let headers = new Headers({
      'Content-Type': 'application/json'
    })

    let options = new RequestOptions({
      headers: headers
    })

    return this.http
      .put(`${PASSENGER_API}/${passenger.id}`, passenger, options)
      .map((res: Response) => res.json());
  }

  removePassengers(passenger: Passenger): Observable<Passenger> {
    return this.http
      .delete(`${PASSENGER_API}/${passenger.id}`)
      .map((res: Response) => res.json());
  }

}
