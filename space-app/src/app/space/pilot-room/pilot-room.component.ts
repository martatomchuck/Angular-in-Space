import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { Pilot } from '../pilot';

@Component({
  selector: 'app-pilot-room',
  templateUrl: './pilot-room.component.html',
  styleUrls: ['./pilot-room.component.css']
})
export class PilotRoomComponent implements OnInit {
  @Output() selected = new EventEmitter<Pilot>();
  pilots: Pilot[] = [];
  selectedPilot: Pilot = null;

  constructor() {}

  ngOnInit() {
    this.pilots.push(new Pilot('Jacob Kosmiczny', '/assets/jacob.svg'));
    this.pilots.push(new Pilot('Mathias Nieziemski', '/assets/mathias.svg'));
    this.pilots.push(new Pilot('Christopher Mars', '/assets/christopher.svg'));
  }

  select(pilot: Pilot): void {
    this.selectedPilot = pilot;
    this.selected.emit(pilot);
  }

  pilotLeave() {
    const index = this.pilots.indexOf(this.selectedPilot);
    this.pilots.splice(index, 1);
    this.select(null);
  }

  pilotReturn(pilot: Pilot) {
    this.pilots.push(pilot);
  }

}
