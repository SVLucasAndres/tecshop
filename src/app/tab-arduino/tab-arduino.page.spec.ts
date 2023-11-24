import { ComponentFixture, TestBed } from '@angular/core/testing';
import { TabArduinoPage } from './tab-arduino.page';

describe('TabArduinoPage', () => {
  let component: TabArduinoPage;
  let fixture: ComponentFixture<TabArduinoPage>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [TabArduinoPage],
    });
    fixture = TestBed.createComponent(TabArduinoPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
