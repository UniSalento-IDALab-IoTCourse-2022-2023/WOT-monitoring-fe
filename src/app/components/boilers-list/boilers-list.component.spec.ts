import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BoilersListComponent } from './boilers-list.component';

describe('BoilersListComponent', () => {
  let component: BoilersListComponent;
  let fixture: ComponentFixture<BoilersListComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [BoilersListComponent]
    });
    fixture = TestBed.createComponent(BoilersListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
