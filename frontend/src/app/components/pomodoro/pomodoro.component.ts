import { Component, Input, OnInit, Output, EventEmitter } from '@angular/core';


@Component({
  selector: 'app-pomodoro',
  templateUrl: './pomodoro.component.html',
  styleUrls: ['./pomodoro.component.css']
})
export class PomodoroComponent implements OnInit {

  @Input() m: number;
  @Input() s: number;
  @Output() onComplete: EventEmitter<any> = new EventEmitter();

  running = false;
  value = [25, 0];

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

}
