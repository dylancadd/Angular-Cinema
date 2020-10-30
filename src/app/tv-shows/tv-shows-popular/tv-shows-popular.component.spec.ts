import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TvShowsPopularComponent } from './tv-shows-popular.component';

describe('TvShowsPopularComponent', () => {
  let component: TvShowsPopularComponent;
  let fixture: ComponentFixture<TvShowsPopularComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TvShowsPopularComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TvShowsPopularComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
