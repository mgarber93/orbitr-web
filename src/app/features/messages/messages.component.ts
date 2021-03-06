import { Component, OnInit, Input, EventEmitter } from '@angular/core';
import { slideAnimations } from '../../animation/animations';
import { messages } from './messages';

@Component({
  selector: 'app-messages',
  templateUrl: './messages.component.html',
  styleUrls: ['./messages.component.scss'],
  animations: [slideAnimations]
})
export class MessagesComponent implements OnInit {

  @Input() messageTrigger: EventEmitter<boolean>;

  public animate = false;

  public messages = messages;

  public message1 = 'inactive';
  public message2 = 'inactive';
  public message3 = 'inactive';
  public message4 = 'inactive';

  ngOnInit() {
    this.subscribeToMessageTrigger();
  }

  subscribeToMessageTrigger() {
    this.messageTrigger.subscribe(trigger => {
      trigger ? this.showMessages() : this.hideMessages();
    });
  }

  showMessages() {
    setTimeout(() => this.message1 = 'active', 500);
    setTimeout(() => this.message2 = 'active', 1000);
    setTimeout(() => this.message3 = 'active', 1500);
    setTimeout(() => this.message4 = 'active', 2000);
  }

  hideMessages() {
    this.message1 = 'inactive';
    this.message2 = 'inactive';
    this.message3 = 'inactive';
    this.message4 = 'inactive';
  }
}
