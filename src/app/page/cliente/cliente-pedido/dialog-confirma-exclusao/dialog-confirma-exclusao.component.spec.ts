import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DialogConfirmaExclusaoComponent } from './dialog-confirma-exclusao.component';

describe('DialogConfirmaExclusaoComponent', () => {
  let component: DialogConfirmaExclusaoComponent;
  let fixture: ComponentFixture<DialogConfirmaExclusaoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DialogConfirmaExclusaoComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DialogConfirmaExclusaoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
