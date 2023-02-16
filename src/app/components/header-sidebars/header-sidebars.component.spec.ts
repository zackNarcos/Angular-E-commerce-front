import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HeaderSidebarsComponent } from './header-sidebars.component';

describe('HeaderSidebarsComponent', () => {
  let component: HeaderSidebarsComponent;
  let fixture: ComponentFixture<HeaderSidebarsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HeaderSidebarsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(HeaderSidebarsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
