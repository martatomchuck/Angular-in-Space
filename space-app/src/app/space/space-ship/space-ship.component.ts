import { Component } from '@angular/core';

@Component({
  selector: 'app-space-ship',
  templateUrl: './space-ship.component.html',
  styleUrls: ['./space-ship.component.css']
})

export class SpaceShipComponent {

  spaceShip = {
    modelName: 'Viper',
    imageUrl: '/assets/spaceship.png',
    health: 75,
    activeShields: true,
    activeWeapons: false
  };

}
