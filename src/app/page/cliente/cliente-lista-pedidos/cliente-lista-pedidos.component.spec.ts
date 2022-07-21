import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ClienteListaPedidosComponent } from './cliente-lista-pedidos.component';

describe('ClienteListaPedidosComponent', () => {
  let component: ClienteListaPedidosComponent;
  let fixture: ComponentFixture<ClienteListaPedidosComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ClienteListaPedidosComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ClienteListaPedidosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
