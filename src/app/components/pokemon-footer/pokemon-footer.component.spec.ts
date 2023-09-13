import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PokemonFooterComponent } from './pokemon-footer.component';

describe('PokemonFooterComponent', () => {
  let component: PokemonFooterComponent;
  let fixture: ComponentFixture<PokemonFooterComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [PokemonFooterComponent]
    });
    fixture = TestBed.createComponent(PokemonFooterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
