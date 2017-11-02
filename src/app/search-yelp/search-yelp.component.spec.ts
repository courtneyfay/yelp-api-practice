import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SearchYelpComponent } from './search-yelp.component';

describe('SearchYelpComponent', () => {
  let component: SearchYelpComponent;
  let fixture: ComponentFixture<SearchYelpComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SearchYelpComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SearchYelpComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
