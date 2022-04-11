import { Component, OnInit } from '@angular/core';
import { Title } from '@angular/platform-browser';

@Component({
  selector: 'app-kraken',
  templateUrl: './kraken.component.html',
  styleUrls: ['./kraken.component.css']
})
export class KrakenComponent implements OnInit {

  constructor(private title:Title) { }

  ngOnInit(): void {
    this.title.setTitle("GOE Airsoft - Kraken Galicia participará en el c.. ")
  }

}
