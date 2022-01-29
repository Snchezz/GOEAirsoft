import { Component, OnInit } from '@angular/core';
import { Title } from '@angular/platform-browser';

@Component({
  selector: 'app-avisoslegales',
  templateUrl: './avisoslegales.component.html',
  styleUrls: ['./avisoslegales.component.css']
})
export class AvisoslegalesComponent implements OnInit {

  constructor(private title:Title) { }

  ngOnInit(): void {
    this.title.setTitle("GOE Airsoft - Avisos Legales")
  }

}
