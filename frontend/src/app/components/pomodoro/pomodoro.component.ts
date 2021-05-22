import { Component, Input, OnInit, Output, EventEmitter, OnDestroy } from '@angular/core';
import { interval, Subscription } from 'rxjs';


@Component({
  selector: 'app-pomodoro',
  templateUrl: './pomodoro.component.html',
  styleUrls: ['./pomodoro.component.css']
})
export class PomodoroComponent implements OnInit, OnDestroy {

  @Input() m: number;
  @Input() s: number;
  @Output() onComplete: EventEmitter<any> = new EventEmitter();

  running = false;
  value = [25, 0];
  subscription: Subscription

  constructor() { }
  
  ngOnInit(): void {
    if(this.m)
      this.value[0] = this.m;
    else
    this.m = 25;
    if(this.s)
      this.value[1] = this.s;
    else
      this.s = 0;
  }

  startPomodoro(): void{
    if(!this.running){
      //set running to true:
      this.running = true;
      //check if the timer is complete and if so reset it before starting:
      if(this.value[0] === 0 && this.value[1] === 0){
        this.resetPomodoro();
      }
      // create Rxjs interval to call a update method every second.
      this.subscription = interval(1000).subscribe(x => this.updatePomodoro())
    }
  }

  stopPomodoro(): void{

  }

  resetPomodoro(): void{

  }

  updatePomodoro(): void{
    
  }
  ngOnDestroy(): void {
    if(this.subscription){
      this.subscription.unsubscribe();
    }
  }
}
