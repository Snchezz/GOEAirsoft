import { Component, OnInit } from '@angular/core';
import { Title } from '@angular/platform-browser';
import * as M from "materialize-css";

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor(private title:Title) { }

  ngOnInit(): void {
  M.AutoInit();
  this.title.setTitle("GOE Airsoft - Home")

  }

}
