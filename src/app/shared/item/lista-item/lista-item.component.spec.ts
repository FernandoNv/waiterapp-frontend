import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListaItemComponent } from './lista-item.component';

describe('ListaItemComponent', () => {
  let component: ListaItemComponent;
  let fixture: ComponentFixture<ListaItemComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ListaItemComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ListaItemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
