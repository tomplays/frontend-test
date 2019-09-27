import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GiphyListComponent } from './giphy-list.component';

describe('GiphyListComponent', () => {
  let component: GiphyListComponent;
  let fixture: ComponentFixture<GiphyListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GiphyListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GiphyListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
