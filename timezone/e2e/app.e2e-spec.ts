import { TimezonePage } from './app.po';

describe('timezone App', function() {
  let page: TimezonePage;

  beforeEach(() => {
    page = new TimezonePage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
