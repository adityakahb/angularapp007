import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PageManageCampaignsComponent } from './page-manage-campaigns.component';

describe('ManageCampaignsComponent', () => {
  let component: PageManageCampaignsComponent;
  let fixture: ComponentFixture<PageManageCampaignsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [PageManageCampaignsComponent]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PageManageCampaignsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
