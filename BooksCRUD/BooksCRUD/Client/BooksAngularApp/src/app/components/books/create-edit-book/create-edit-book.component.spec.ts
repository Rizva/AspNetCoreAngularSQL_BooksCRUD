import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CreateEditBookComponent } from './create-edit-book.component';

describe('CreateEditBookComponent', () => {
  let component: CreateEditBookComponent;
  let fixture: ComponentFixture<CreateEditBookComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CreateEditBookComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CreateEditBookComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
