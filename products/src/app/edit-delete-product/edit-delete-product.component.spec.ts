import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EditDeleteProductComponent } from './edit-delete-product.component';

describe('EditDeleteProductComponent', () => {
  let component: EditDeleteProductComponent;
  let fixture: ComponentFixture<EditDeleteProductComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EditDeleteProductComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EditDeleteProductComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
