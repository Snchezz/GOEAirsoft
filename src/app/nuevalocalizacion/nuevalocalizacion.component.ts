import { Component, OnInit } from '@angular/core';
import { Title } from '@angular/platform-browser';

@Component({
  selector: 'app-nuevalocalizacion',
  templateUrl: './nuevalocalizacion.component.html',
  styleUrls: ['./nuevalocalizacion.component.css']
})
export class NuevalocalizacionComponent implements OnInit {

  constructor(private title:Title) { }

  ngOnInit(): void {
    this.title.setTitle("GOE Airsoft - Nueva Localizaci...")
  }


}
