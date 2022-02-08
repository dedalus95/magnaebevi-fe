import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MostraMenuComponent } from './mostra-menu.component';

describe('MostraMenuComponent', () => {
  let component: MostraMenuComponent;
  let fixture: ComponentFixture<MostraMenuComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MostraMenuComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MostraMenuComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
