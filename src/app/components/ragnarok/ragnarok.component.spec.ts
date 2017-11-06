import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RagnarokComponent } from './ragnarok.component';

describe('RagnarokComponent', () => {
  let component: RagnarokComponent;
  let fixture: ComponentFixture<RagnarokComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RagnarokComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RagnarokComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
