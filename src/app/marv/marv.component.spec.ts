import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MarvComponent } from './marv.component';

describe('MarvComponent', () => {
  let component: MarvComponent;
  let fixture: ComponentFixture<MarvComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MarvComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MarvComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
