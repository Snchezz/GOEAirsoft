import { Component, OnInit } from '@angular/core';
import { Title } from '@angular/platform-browser';

@Component({
  selector: 'app-infoweb',
  templateUrl: './infoweb.component.html',
  styleUrls: ['./infoweb.component.css']
})
export class InfowebComponent implements OnInit {

  constructor(private title:Title) { }

  ngOnInit(): void {
    this.title.setTitle("GOE Airsoft - Informacion Web")
  }


}
