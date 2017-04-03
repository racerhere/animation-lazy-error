import { AnimationLazyErrorPage } from './app.po';

describe('animation-lazy-error App', () => {
  let page: AnimationLazyErrorPage;

  beforeEach(() => {
    page = new AnimationLazyErrorPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
