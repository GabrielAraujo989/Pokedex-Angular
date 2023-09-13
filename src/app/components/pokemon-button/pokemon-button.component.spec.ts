import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PokemonButtonComponent } from './pokemon-button.component';

describe('PokemonButtonComponent', () => {
  let component: PokemonButtonComponent;
  let fixture: ComponentFixture<PokemonButtonComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [PokemonButtonComponent]
    });
    fixture = TestBed.createComponent(PokemonButtonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
