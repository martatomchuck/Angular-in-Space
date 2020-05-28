import { Injectable } from '@angular/core';
import { FighterShip } from './fighter-ship';
import { BomberShip } from './bomber-ship';
import { Observable, interval, BehaviorSubject } from 'rxjs';
import { map, take, tap } from 'rxjs/operators';
import { OrderFormValue } from './order-form-value';
import { SpaceShipType } from './space-ship-type.enum';
import { SpaceShip } from './space-ship';

@Injectable({
  providedIn: 'root'
})
export class SpaceShipService {
  static shipProductionTime = 2000;

  constructor() {}

  hangarShips = new BehaviorSubject<SpaceShip[]>([]);

  produceShips(formValues: OrderFormValue): Observable<SpaceShip> {
    const shipClass = formValues.shipType === SpaceShipType.Fighter ? FighterShip : BomberShip;

    return interval(SpaceShipService.shipProductionTime).pipe(
      map(() => new shipClass()),
      take(formValues.shipCount),
      tap((spaceShip) => this.hangarShips.next([...this.hangarShips.getValue(), spaceShip]))
    );
  }

  removeShip(shipIndex: number) {
    const ships = [...this.hangarShips.getValue()];
    ships.splice(shipIndex, 1);
    this.hangarShips.next(ships);
  }
}
