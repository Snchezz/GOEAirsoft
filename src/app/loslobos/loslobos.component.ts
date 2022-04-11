import { Component, OnInit } from '@angular/core';
import { Title } from '@angular/platform-browser';

@Component({
  selector: 'app-loslobos',
  templateUrl: './loslobos.component.html',
  styleUrls: ['./loslobos.component.css']
})
export class LoslobosComponent implements OnInit {

  constructor(private title: Title) { }

  ngOnInit(): void {
    this.title.setTitle("GOE Airsoft - El equipo juvenil 'Los Lobos'...")
  }
}
