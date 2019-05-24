import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-intro-card',
  templateUrl: './intro-card.component.html',
  styleUrls: ['./intro-card.component.css']
})
export class IntroCardComponent implements OnInit {
  bannerName = 'jon-michael dreher';
  mainImage = 'https://s3-us-west-1.amazonaws.com/marmot-clone-start/me_cutout.png';


  constructor() { }

  ngOnInit() {
  }

}