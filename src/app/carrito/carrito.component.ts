import { Component, OnInit } from '@angular/core';
import { Title } from '@angular/platform-browser';
import * as M from 'materialize-css';

@Component({
  selector: 'app-carrito',
  templateUrl: './carrito.component.html',
  styleUrls: ['./carrito.component.css']
})
export class CarritoComponent implements OnInit {

  constructor(private title:Title) { }

  ngOnInit(): void {
    this.title.setTitle("GOE Airsoft - Carrito")
  }


}
