import { BarcodePage } from './app.po';

describe('barcode App', function() {
  let page: BarcodePage;

  beforeEach(() => {
    page = new BarcodePage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
