import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-intro-card',
  templateUrl: './intro-card.component.html',
  styleUrls: ['./intro-card.component.css']
})
export class IntroCardComponent implements OnInit {
  creepyText = 'Why is it creepy Kelli? ';
  meCutout = ''


  constructor() { }

  ngOnInit() {
  }

  creepKelliOut() {
    window.open('https://www.youtube.com/watch?v=JgV97eh64Uc');
  }

}