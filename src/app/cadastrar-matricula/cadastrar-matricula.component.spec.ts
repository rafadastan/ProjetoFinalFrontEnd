import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CadastrarMatriculaComponent } from './cadastrar-matricula.component';

describe('CadastrarMatriculaComponent', () => {
  let component: CadastrarMatriculaComponent;
  let fixture: ComponentFixture<CadastrarMatriculaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CadastrarMatriculaComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CadastrarMatriculaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
