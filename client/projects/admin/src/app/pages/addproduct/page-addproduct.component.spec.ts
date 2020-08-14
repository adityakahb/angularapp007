import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PageAddproductComponent } from './page-addproduct.component';

describe('AddProductComponent', () => {
  let component: PageAddproductComponent;
  let fixture: ComponentFixture<PageAddproductComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [PageAddproductComponent]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PageAddproductComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
