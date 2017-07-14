import { FuckangularPage } from './app.po';

describe('fuckangular App', function() {
  let page: FuckangularPage;

  beforeEach(() => {
    page = new FuckangularPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
