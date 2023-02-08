import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'app-countdown-timer',
  templateUrl: './countdown-timer.component.html',
  styleUrls: ['./countdown-timer.component.css']
})
export class CountdownTimerComponent implements OnInit {
  message = '';
  remainingTime: number;
  @Input()
  seconds = 11;
  @Input()
  private intervalId = 0;


  clearTimer() {
    clearInterval(this.intervalId);
  }

  ngOnInit() {
    this.reset();
  }


  start() {
    this.countDown();
    if (this.remainingTime <= 0) {
      this.remainingTime = this.seconds;
    }
  }

  stop() {
    this.clearTimer();
    this.message = `nắm giữ tạiT-${this.remainingTime}
giây`;
  }

  reset() {
    this.clearTimer();
    this.remainingTime = this.seconds;
    this.message = `Nhấp vào nút bắt đầu để bắt đầu Đếm ngược`;
  }

  private countDown() {
    this.clearTimer();
    this.intervalId = window.setInterval(() => {
      this.remainingTime -= 1;
      if (this.remainingTime === 0) {
        this.message = 'Nổ ra!';
        this.clearTimer();
      } else {
        this.message = `T-${this.remainingTime} giây và đếm`;
      }
    }, 1000);
  }

}
