import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TvShowsLatestComponent } from './tv-shows-latest.component';

describe('TvShowsLatestComponent', () => {
  let component: TvShowsLatestComponent;
  let fixture: ComponentFixture<TvShowsLatestComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TvShowsLatestComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TvShowsLatestComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
