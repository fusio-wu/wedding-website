import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-introduction',
  templateUrl: './introduction.component.html',
  styleUrls: ['./introduction.component.css']
})
export class IntroductionComponent implements OnInit {
  today: Date = new Date();
  // Target wedding date is  2021, September 18 5pm LA time =>  2021, September 19 00:00 UTC
  targetDate: Date = new Date('September 18, 2021 17:00:00');
  location: string = "South Park Center Los Angeles";

  constructor() { }

  ngOnInit(): void {
  }

  daysToGo(): number {
    const diffTime = Math.abs(this.targetDate.getTime() - this.today.getTime());
    const diffDates = Math.round(diffTime / (1000 * 60 * 60 * 24)); 
    return diffDates;
  }
}
