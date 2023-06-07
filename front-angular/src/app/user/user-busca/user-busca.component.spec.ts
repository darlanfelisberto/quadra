import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UserBuscaComponent } from './user-busca.component';

describe('UserBuscaComponent', () => {
  let component: UserBuscaComponent;
  let fixture: ComponentFixture<UserBuscaComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [UserBuscaComponent]
    });
    fixture = TestBed.createComponent(UserBuscaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
