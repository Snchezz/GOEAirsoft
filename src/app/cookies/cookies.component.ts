import { Component, OnInit } from '@angular/core';
import { Title } from '@angular/platform-browser';

@Component({
  selector: 'app-cookies',
  templateUrl: './cookies.component.html',
  styleUrls: ['./cookies.component.css']
})
export class CookiesComponent implements OnInit {

  constructor(private title:Title) { }

  ngOnInit(): void {
    this.title.setTitle("GOE Airsoft - Cookies")
  }



}
