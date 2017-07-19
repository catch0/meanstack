import { Forecast2Page } from './app.po';

describe('forecast2 App', function() {
  let page: Forecast2Page;

  beforeEach(() => {
    page = new Forecast2Page();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
