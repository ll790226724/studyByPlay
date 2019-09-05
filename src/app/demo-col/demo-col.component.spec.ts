import { fakeAsync, ComponentFixture, TestBed } from '@angular/core/testing';
import { DemoColComponent } from './demo-col.component';

describe('DemoColComponent', () => {
  let component: DemoColComponent;
  let fixture: ComponentFixture<DemoColComponent>;

  beforeEach(fakeAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ DemoColComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DemoColComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should compile', () => {
    expect(component).toBeTruthy();
  });
});
