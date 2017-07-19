import { LayoutPage } from './app.po';

describe('layout App', function() {
  let page: LayoutPage;

  beforeEach(() => {
    page = new LayoutPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
