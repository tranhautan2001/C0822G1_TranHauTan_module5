import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { YoutobePlayerComponent } from './youtobe-player.component';

describe('YoutobePlayerComponent', () => {
  let component: YoutobePlayerComponent;
  let fixture: ComponentFixture<YoutobePlayerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ YoutobePlayerComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(YoutobePlayerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
