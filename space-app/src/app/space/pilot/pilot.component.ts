import { Component, OnInit, Input } from '@angular/core';
import { Pilot } from '../pilot';

@Component({
  selector: 'app-pilot',
  templateUrl: './pilot.component.html',
  styleUrls: ['./pilot.component.css']
})
export class PilotComponent implements OnInit {

  @Input() pilot: Pilot;

  constructor() { }

  ngOnInit(): void {
  }

}
