import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ChemCrossComponent } from './chem-cross.component';

describe('ChemCrossComponent', () => {
  let component: ChemCrossComponent;
  let fixture: ComponentFixture<ChemCrossComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ChemCrossComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ChemCrossComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
