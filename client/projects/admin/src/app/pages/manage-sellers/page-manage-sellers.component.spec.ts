import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PageManageSellersComponent } from './page-manage-sellers.component';

describe('ManageSellersComponent', () => {
  let component: PageManageSellersComponent;
  let fixture: ComponentFixture<PageManageSellersComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [PageManageSellersComponent]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PageManageSellersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
