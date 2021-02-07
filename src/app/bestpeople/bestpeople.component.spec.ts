import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BestpeopleComponent } from './bestpeople.component';

describe('BestpeopleComponent', () => {
  let component: BestpeopleComponent;
  let fixture: ComponentFixture<BestpeopleComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BestpeopleComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BestpeopleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
