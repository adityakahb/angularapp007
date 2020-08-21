import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PageAddbulkComponent } from './page-addbulk.component';

describe('AddProductComponent', () => {
  let component: PageAddbulkComponent;
  let fixture: ComponentFixture<PageAddbulkComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [PageAddbulkComponent]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PageAddbulkComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
