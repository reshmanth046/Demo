import { Component, OnInit } from '@angular/core';
import { interval } from 'rxjs';
import { takeWhile } from 'rxjs/operators';
import { formatDate } from '@angular/common';

@Component({
  selector: 'app-timer',
  templateUrl: './timer.component.html',
  styleUrls: ['./timer.component.scss']
})
export class TimerComponent implements OnInit {
  target: any; // User entered date
  days: number; // Days in the clock
  hours: number; // Hours in the clock
  minutes: number; // Minutes in the clock
  seconds: number; // Seconds in the clock
  stopped: boolean; // Indicates if clock should be counting down
  started: boolean; // Indicates if the submit button has been pressed to display clock

  constructor() {
  }

  ngOnInit(): void {
    // Set background to a gradient lighter blue to a darker blue
    document.body.style.backgroundAttachment = 'fixed';
    document.body.style.backgroundImage = 'linear-gradient(dodgerblue, darkblue)';
    // Clock should not be displayed at this point
    this.stopped = true;
    this.started = false;
  }

  // Starts countdown clock
  setTime() {
    // Starting the clock
    this.stopped = false;
    // Indicate the submit button has been clicked
    this.started = true;
    // Update/display clock
    this.countTime();
    // Observable to update clock every second
    interval(1000)
      .pipe(takeWhile(() => this.stopped === false))
      .subscribe(() => { this.countTime(); });
  }

  // Update clock time
  countTime() {
    // Find the difference between future date and now
    let time = new Date(this.target).getTime() - new Date().getTime();
    if (time < 0) {
      // Stop clock if the target is in the past
      this.stopped = true;
    } else {
      this.days = Math.floor( time / 1000 / 60 / 60 / 24);
      time -= this.days * 1000 * 60 * 60 * 24;
      this.hours = Math.floor( time / 1000 / 60 / 60);
      time -= this.hours * 1000 * 60 * 60;
      this.minutes = Math.floor( time / 1000 / 60);
      time -= this.minutes * 1000 * 60;
      this.seconds = Math.floor( time / 1000);
    }
  }

  // Returns a formatted date string of the target date
  // Ex. June 23, 2020
  getTime(): string {
    return formatDate(this.target, 'longDate', 'en-US');
  }
}
