import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PageManageCategoriesComponent } from './page-manage-categories.component';

describe('ManageCategoriesComponent', () => {
  let component: PageManageCategoriesComponent;
  let fixture: ComponentFixture<PageManageCategoriesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [PageManageCategoriesComponent]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PageManageCategoriesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
