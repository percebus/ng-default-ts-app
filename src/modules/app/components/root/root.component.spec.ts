import { ComponentFixture, TestBed } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { RootComponent } from './root.component';

describe('RootComponent', () => {
  let demoFixtureComponent: ComponentFixture<RootComponent>;
  let oRootComponent: RootComponent;
  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [RouterTestingModule],
      declarations: [RootComponent],
    });

    demoFixtureComponent = TestBed.createComponent(RootComponent);
    demoFixtureComponent.detectChanges();
    oRootComponent = demoFixtureComponent.componentInstance;
  });

  it('is instanciated', () => {
    expect(oRootComponent).toBeInstanceOf(RootComponent);
  });

  describe('title', () => {
    it(`equals 'demo'`, () => {
      expect(oRootComponent.title).toEqual('demo');
    });

    describe('HTML', () => {
      it('contains "{title} is running!"', () => {
        const oHTMLElement: HTMLElement = demoFixtureComponent.nativeElement;

        const textContent =
          oHTMLElement.querySelector('.content span')?.textContent;

        expect(textContent).toContain('demo app is running!');
      });
    });
  });
});
