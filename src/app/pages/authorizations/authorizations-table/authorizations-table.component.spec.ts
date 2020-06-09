import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AuthorizationsTableComponent } from './authorizations-table.component';

describe('AuthorizationsTableComponent', () => {
  let component: AuthorizationsTableComponent;
  let fixture: ComponentFixture<AuthorizationsTableComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AuthorizationsTableComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AuthorizationsTableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
