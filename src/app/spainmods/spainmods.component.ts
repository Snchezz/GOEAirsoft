import { Component, OnInit } from '@angular/core';
import { Title } from '@angular/platform-browser';

@Component({
  selector: 'app-spainmods',
  templateUrl: './spainmods.component.html',
  styleUrls: ['./spainmods.component.css']
})
export class SpainmodsComponent implements OnInit {

  constructor(private title: Title) { }

  ngOnInit(): void {
    this.title.setTitle("GOE Airsoft - El equipo juvenil 'Los Lobos'...")
  }

}
