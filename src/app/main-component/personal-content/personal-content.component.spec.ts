import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PersonalContentComponent } from './personal-content.component';

describe('PersonalContentComponent', () => {
  let component: PersonalContentComponent;
  let fixture: ComponentFixture<PersonalContentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PersonalContentComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(PersonalContentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
