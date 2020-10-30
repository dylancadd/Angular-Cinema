import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TvShowsTopRatedComponent } from './tv-shows-top-rated.component';

describe('TvShowsTopRatedComponent', () => {
  let component: TvShowsTopRatedComponent;
  let fixture: ComponentFixture<TvShowsTopRatedComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TvShowsTopRatedComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TvShowsTopRatedComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
