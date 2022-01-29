import { Component, OnInit } from '@angular/core';
import { Title } from '@angular/platform-browser';

@Component({
  selector: 'app-registrer',
  templateUrl: './registrer.component.html',
  styleUrls: ['./registrer.component.css']
})
export class RegistrerComponent implements OnInit {

  constructor(private title:Title) { }

  ngOnInit(): void {
    this.title.setTitle("GOE Airsoft - Registro")
  }


}
