import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UpdateProductComponent } from './updateProduct.component';

describe('UpdateproductComponent', () => {
  let component: UpdateProductComponent;
  let fixture: ComponentFixture<UpdateProductComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UpdateProductComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(UpdateProductComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
