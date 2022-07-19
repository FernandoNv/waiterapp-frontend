import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ClienteFazerPedidoComponent } from './cliente-fazer-pedido.component';

describe('ClienteFazerPedidoComponent', () => {
  let component: ClienteFazerPedidoComponent;
  let fixture: ComponentFixture<ClienteFazerPedidoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ClienteFazerPedidoComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ClienteFazerPedidoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
