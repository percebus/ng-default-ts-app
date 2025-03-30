import { ComponentFixture, TestBed } from '@angular/core/testing';
import { RootComponent } from './root.component';

describe('RootComponent', () => {
  let oComponentFixture: ComponentFixture<RootComponent>;
  let oRootComponent: RootComponent;
  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [RootComponent],
    }).compileComponents();

    oComponentFixture = TestBed.createComponent(RootComponent);
    oComponentFixture.detectChanges();
    oRootComponent = oComponentFixture.componentInstance;
  });

  it('is instanciated', () => {
    expect(oRootComponent).toBeInstanceOf(RootComponent);
  });
});
