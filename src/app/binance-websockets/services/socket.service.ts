import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {BehaviorSubject, Observable, Observer} from 'rxjs/Rx';

@Injectable({
  providedIn: 'root'
})
export class SocketService {
  // tickerStream = new BehaviorSubject<Array<any>>([]);
  ticker;
  constructor(private http: HttpClient) {
    this.fetchStream()
  }

  fetchStream(){
    let stream = new WebSocket('wss://stream.binance.com:9443/ws/!ticker@arr');
    // stream.onmessage = (event) => {
    //   // console.log(event.data);
    //   this.tickerStream.next(event.data)
    // };
    this.ticker = Observable.create(
      (obs: Observer<MessageEvent>) => {
        stream.onmessage = obs.next.bind(obs);
        stream.onerror = obs.error.bind(obs);
        stream.onclose = obs.complete.bind(obs);
        return stream.close.bind(stream);
      })
  }
}
