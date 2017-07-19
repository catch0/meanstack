import { QuoteRanksPage } from './app.po';

describe('quote-ranks App', function() {
  let page: QuoteRanksPage;

  beforeEach(() => {
    page = new QuoteRanksPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
