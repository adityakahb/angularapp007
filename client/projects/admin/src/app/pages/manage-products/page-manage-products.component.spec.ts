import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PageManageProductsComponent } from './page-manage-products.component';

describe('ManageProductsComponent', () => {
  let component: PageManageProductsComponent;
  let fixture: ComponentFixture<PageManageProductsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [PageManageProductsComponent]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PageManageProductsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
