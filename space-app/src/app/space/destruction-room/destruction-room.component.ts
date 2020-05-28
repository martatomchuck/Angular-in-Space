import { Component, OnInit } from '@angular/core';
import { SpaceShipService } from '../space-ship.service';
import { FormControl } from '@angular/forms';

@Component({
  selector: 'app-destruction-room',
  templateUrl: './destruction-room.component.html',
  styleUrls: ['./destruction-room.component.css']
})
export class DestructionRoomComponent implements OnInit {

  spaceShips = this.spaceShipService.hangarShips;
  shipIndexControl = new FormControl(null);

  constructor(private spaceShipService: SpaceShipService) {}

  ngOnInit(): void {
  }

  orderDestruction() {
    this.spaceShipService.removeShip(this.shipIndexControl.value);
    this.shipIndexControl.reset();
  }

}
