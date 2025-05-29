import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CreateEditAuthorComponent } from './create-edit-author.component';

describe('CreateEditAuthorComponent', () => {
  let component: CreateEditAuthorComponent;
  let fixture: ComponentFixture<CreateEditAuthorComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CreateEditAuthorComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CreateEditAuthorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
