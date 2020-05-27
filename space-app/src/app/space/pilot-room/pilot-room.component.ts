import { Component, OnInit } from '@angular/core';
import { Pilot } from '../pilot';

@Component({
  selector: 'app-pilot-room',
  templateUrl: './pilot-room.component.html',
  styleUrls: ['./pilot-room.component.css']
})
export class PilotRoomComponent implements OnInit {

  pilots: Pilot[] = [];

  ngOnInit() {
    this.pilots.push(new Pilot('Jacob Kowalski', '/assets/jacob.svg'));
    this.pilots.push(new Pilot('Mathias Nowak', '/assets/mathias.svg'));
  }

  selectedPilot: Pilot = null;

  select(pilot: Pilot): void {
    this.selectedPilot = pilot;
  }
}
