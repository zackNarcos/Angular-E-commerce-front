import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HeaderLighterComponent } from './header-lighter.component';

describe('HeaderLighterComponent', () => {
  let component: HeaderLighterComponent;
  let fixture: ComponentFixture<HeaderLighterComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HeaderLighterComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(HeaderLighterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
