import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HelloWorldComponent } from './hello-world.component';

describe('HelloWorldComponent', () => {
  let oComponentFixture: ComponentFixture<HelloWorldComponent>;
  let oHelloWorldComponent: HelloWorldComponent;
  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HelloWorldComponent],
    });

    oComponentFixture = TestBed.createComponent(HelloWorldComponent);
    oComponentFixture.detectChanges();
    oHelloWorldComponent = oComponentFixture.componentInstance;
  });

  it('is instanciated', () => {
    expect(oHelloWorldComponent).toBeInstanceOf(HelloWorldComponent);
  });

  describe('title', () => {
    it(`equals 'demo'`, () => {
      expect(oHelloWorldComponent.title).toEqual('demo');
    });

    describe('HTML', () => {
      it('contains "{title} is running!"', () => {
        const oHTMLElement: HTMLElement = oComponentFixture.nativeElement;

        const textContent = oHTMLElement.querySelector('h1')?.textContent;

        expect(textContent).toContain('Hello, demo');
      });
    });
  });
});
