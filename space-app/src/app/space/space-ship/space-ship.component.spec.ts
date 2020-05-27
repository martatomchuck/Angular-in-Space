import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SpaceShipComponent } from './space-ship.component';

describe('SpaceShipComponent', () => {
  let component: SpaceShipComponent;
  let fixture: ComponentFixture<SpaceShipComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SpaceShipComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SpaceShipComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
