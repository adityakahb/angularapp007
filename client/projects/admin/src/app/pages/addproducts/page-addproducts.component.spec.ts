import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PageAddproductsComponent } from './page-addproducts.component';

describe('AddProductComponent', () => {
  let component: PageAddproductsComponent;
  let fixture: ComponentFixture<PageAddproductsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [PageAddproductsComponent]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PageAddproductsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
