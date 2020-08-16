import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PageManageUsersComponent } from './page-manage-users.component';

describe('ManageUsersComponent', () => {
  let component: PageManageUsersComponent;
  let fixture: ComponentFixture<PageManageUsersComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [PageManageUsersComponent]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PageManageUsersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
