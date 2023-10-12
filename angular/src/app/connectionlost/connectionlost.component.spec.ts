import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ConnectionlostComponent } from './connectionlost.component';

describe('ConnectionlostComponent', () => {
  let component: ConnectionlostComponent;
  let fixture: ComponentFixture<ConnectionlostComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ConnectionlostComponent]
    });
    fixture = TestBed.createComponent(ConnectionlostComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
