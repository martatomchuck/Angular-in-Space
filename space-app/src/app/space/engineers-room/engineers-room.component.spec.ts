import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EngineersRoomComponent } from './engineers-room.component';

describe('EngineersRoomComponent', () => {
  let component: EngineersRoomComponent;
  let fixture: ComponentFixture<EngineersRoomComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EngineersRoomComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EngineersRoomComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
