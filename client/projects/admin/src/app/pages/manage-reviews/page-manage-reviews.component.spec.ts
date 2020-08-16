import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PageManageReviewsComponent } from './page-manage-reviews.component';

describe('ManageReviewsComponent', () => {
  let component: PageManageReviewsComponent;
  let fixture: ComponentFixture<PageManageReviewsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [PageManageReviewsComponent]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PageManageReviewsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
