import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GiphyListItemComponent } from './giphy-list-item.component';

describe('GiphyListItemComponent', () => {
  let component: GiphyListItemComponent;
  let fixture: ComponentFixture<GiphyListItemComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GiphyListItemComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GiphyListItemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
