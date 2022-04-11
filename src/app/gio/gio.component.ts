import { Component, OnInit } from '@angular/core';
import { Title } from '@angular/platform-browser';

@Component({
  selector: 'app-gio',
  templateUrl: './gio.component.html',
  styleUrls: ['./gio.component.css']
})
export class GioComponent implements OnInit {

  constructor(private title:Title) { }

  ngOnInit(): void {
    this.title.setTitle("GOE Airsoft - La famosa marca GI-O crea la r...")
  }

}
