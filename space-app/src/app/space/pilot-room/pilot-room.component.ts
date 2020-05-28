import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { Pilot } from '../pilot';
import { PilotService } from '../pilot.service';

@Component({
  selector: 'app-pilot-room',
  templateUrl: './pilot-room.component.html',
  styleUrls: ['./pilot-room.component.css']
})
export class PilotRoomComponent implements OnInit {
  @Output() selected = new EventEmitter<Pilot>();
  pilots: Pilot[] = [];
  selectedPilot: Pilot = null;

  constructor(private pilotService: PilotService) { }

  ngOnInit() {
    // STATYCZNIE DODANI PILOCI:
    // this.pilots.push(new Pilot('Jacob Kosmiczny', '/assets/jacob.svg'));
    // this.pilots.push(new Pilot('Mathias Nieziemski', '/assets/mathias.svg'));
    // this.pilots.push(new Pilot('Christopher Mars', '/assets/christopher.svg'));

    // PILOCI DYNAMICZNIE POBRANI Z API
    this.pilotService.getPilots().subscribe({
      next: (pilots) => this.pilots = pilots,
      error: () => alert('Nie udało się pobrać pilotów')
    });
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
