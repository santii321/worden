import { ComponentFixture, TestBed } from '@angular/core/testing';
import { SstPage } from './sst.page';

describe('SstPage', () => {
  let component: SstPage;
  let fixture: ComponentFixture<SstPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(SstPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
