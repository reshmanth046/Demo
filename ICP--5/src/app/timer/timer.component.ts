import {Component, OnInit} from '@angular/core';

@Component({
    selector: 'app-timer',
    templateUrl: './timer.component.html',
    styleUrls: ['./timer.component.css']
})
export class TimerComponent implements OnInit {
    public Date: String;
    public showError: boolean = false;
    public countDown: any = ['-', '-', '-', '-'];
    public todayDate = new Date();

    constructor() {
    }

    ngOnInit(): void {
    }

//Timer method called which calculates current date minus given date and displays difference
    setTimer() {
        const [year, month, day] = this.Date.split('-');
        const selectedDate = new Date(+year, +month - 1, +day);
        if (selectedDate < new Date()) {
            this.showError = true
        } else {
            const difference = (selectedDate.getTime() - new Date().getTime()) / 1000;
            const days = Math.floor(difference / (60 * 60 * 24));
            const hours = Math.floor((difference % (60 * 60 * 24)) / (60 * 60));
            const minutes = Math.floor((difference % (60 * 60)) / (60));
            const seconds = Math.floor((difference % (60)));
            this.countDown = [days, hours, minutes, seconds]
        }
    }

//method for calling timer with 1ms of time interval
    setCounter() {
        setInterval(() => {
            this.setTimer()
        }, 1000)
    }

}
