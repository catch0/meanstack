import { DojoMailPage } from './app.po';

describe('dojo-mail App', function() {
  let page: DojoMailPage;

  beforeEach(() => {
    page = new DojoMailPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
