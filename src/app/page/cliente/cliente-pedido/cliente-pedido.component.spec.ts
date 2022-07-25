import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ClientePedidoComponent } from './cliente-pedido.component';

describe('ClientePedidoComponent', () => {
  let component: ClientePedidoComponent;
  let fixture: ComponentFixture<ClientePedidoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ClientePedidoComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ClientePedidoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
