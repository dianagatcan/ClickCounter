import { Component, OnInit, Input } from '@angular/core';


@Component({
  selector: 'app-counter',
  templateUrl: './counter.component.html',
  styleUrls: ['./counter.component.css']
})
export class CounterComponent implements OnInit {
 defaultNumber = 0;
  constructor() { }

  ngOnInit(): void {
  }

  increase(): void {
    // this.count++;
    this.defaultNumber++
  }
  decrease(): void {
    this.defaultNumber--
  }
}
