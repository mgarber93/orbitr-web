import { Injectable, EventEmitter } from '@angular/core';
import { Http } from '@angular/http';

@Injectable({
  providedIn: 'root'
})
export class SubscribeService {

  public modalEmitter: EventEmitter<string> = new EventEmitter<string>();
  public subscribed = !!this.getEmail();

  constructor(
    private http: Http
  ) { }

  subscribe(email: string) {
    return this.http.post('https://orbitr-web.herokuapp.com/subscribe', { email: email })
      .toPromise()
      .then(res => {
        this.modalEmitter.emit('success');
        this.subscribed = true;
        this.setEmail(res.json().email);
        return res;
      })
      .catch(err => console.log(err.json()));
  }

  setEmail(email: string) {
    localStorage.setItem('subscriptionEmail', email);
  }

  getEmail() {
    return localStorage.getItem('subscriptionEmail');
  }

  openModal() {
    this.modalEmitter.emit('open');
  }

  closeModal() {
    this.modalEmitter.emit('close');
  }
}
